const p = Element.prototype;

/* istanbul ignore next */
const matches =
  p.matches ||
  p.matchesSelector ||
  p.mozMatchesSelector ||
  p.msMatchesSelector ||
  p.oMatchesSelector ||
  p.webkitMatchesSelector;

export const matchesSelector = (node, selector) => matches.call(node, selector);
