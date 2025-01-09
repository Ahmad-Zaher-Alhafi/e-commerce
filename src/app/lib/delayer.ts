let timeout: NodeJS.Timeout;

function doAfter(delay: number, callback: () => void) {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(callback, delay * 1000);
}

export { doAfter };
