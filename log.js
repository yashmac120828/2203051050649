const axios = require("axios");
require("dotenv").config(); 

const LOG_ENDPOINT = "http://20.244.56.144/evaluation-service/logs";
const ALLOWED_STACKS = ["backend", "frontend"];
const ALLOWED_LEVELS = ["debug", "info", "warn", "error", "fatal"];

const BACKEND_PACKAGES = [
  "cache", "controller", "cron_job", "db", "domain",
  "handler", "repository", "route", "service"
];

const FRONTEND_PACKAGES = [
  "api", "component", "hook", "page", "state", "style"
];

const COMMON_PACKAGES = ["auth", "config", "middleware", "utils"];

function Log(stack, level, packageName, message) {
  if (!ALLOWED_STACKS.includes(stack)) {
    console.error(" Invalid stack. Allowed:", ALLOWED_STACKS);
    return;
  }

  if (!ALLOWED_LEVELS.includes(level)) {
    console.error(" Invalid level. Allowed:", ALLOWED_LEVELS);
    return;
  }

  const validPackages =
    stack === "backend"
      ? [...BACKEND_PACKAGES, ...COMMON_PACKAGES]
      : [...FRONTEND_PACKAGES, ...COMMON_PACKAGES];

  if (!validPackages.includes(packageName)) {
    console.error(` Invalid package "${packageName}" for ${stack}. Allowed:`, validPackages);
    return;
  }

  const payload = { stack, level, package: packageName, message };

  axios
    .post(LOG_ENDPOINT, payload, {
      headers: {
        Authorization: `Bearer ${process.env.LOG_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(` Log sent [${res.status}]:`, payload);
      console.log(res);
    })
    .catch((err) => {
      console.error(" Log failed:", err.message);
    });
}

module.exports = Log;
