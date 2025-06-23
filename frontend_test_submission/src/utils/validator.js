export const isValidURL = (url) => {
  const pattern = /^(ftp|http|https):\/\/[^ "\s]+$/;
  return pattern.test(url);
};
