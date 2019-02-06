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
