export function blur(node) {
  node.dispatchEvent(new CustomEvent('blur', { bubbles: false }));
}

export function focus(node) {
  node.dispatchEvent(new CustomEvent('focus', { bubbles: false }));
}

export function focusin(node) {
  node.dispatchEvent(new CustomEvent('focusin', { bubbles: true, composed: true }));
}

export function focusout(node, relatedTarget) {
  const event = new CustomEvent('focusout', { bubbles: true, composed: true });
  if (relatedTarget) {
    event.relatedTarget = relatedTarget;
  }
  node.dispatchEvent(event);
}

export function mousedown(node) {
  node.dispatchEvent(new CustomEvent('mousedown', { bubbles: true, composed: true }));
}

export function mouseup(node) {
  node.dispatchEvent(new CustomEvent('mouseup', { bubbles: true, composed: true }));
}
