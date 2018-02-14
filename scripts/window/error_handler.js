window.onerror = function(message, url, line, col, error) {
  logError(message, url, line, col, error.stack);
  return true;
};
