const logEvent = (type, message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${type}] ${message}`;
  localStorage.setItem(`log-${timestamp}`, logMessage);
};

export default logEvent;
