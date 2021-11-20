export function debounce(delay) {
  let id = null;
  let waiting = false;

  return (fn) => {
    if (waiting) {
      clearTimeout(id);
    }
    waiting = true;
    id = setTimeout(() => {
      if (typeof fn === "function") {
        fn();
        waiting = false;
      }
    }, delay);
  };
}
