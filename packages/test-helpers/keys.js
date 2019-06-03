/**
 * Returns a keyboard event. This event bubbles and is cancellable.
 *
 * @param {string} type The type of keyboard event (such as 'keyup' or
 * 'keydown').
 * @param {number} keyCode The keyCode for the event.
 * @param {(Array<string>)=} modifiers The key modifiers for the event.
 *     Accepted values are shift, ctrl, alt, meta.
 * @param {string=} key The KeyboardEvent.key value for the event.
 */
export function keyboardEventFor(type, keyCode, modifiers = [], key) {
  const event = new CustomEvent(type, {
    detail: 0,
    bubbles: true,
    cancelable: true,
    // Allow event to go outside a ShadowRoot.
    composed: true
  });

  event.keyCode = keyCode;
  event.code = keyCode;

  event.shiftKey = modifiers.indexOf('shift') !== -1;
  event.altKey = modifiers.indexOf('alt') !== -1;
  event.ctrlKey = modifiers.indexOf('ctrl') !== -1;
  event.metaKey = modifiers.indexOf('meta') !== -1;

  event.key = key;

  return event;
}

/**
 * Fires a keyboard event on a specific node. This event bubbles and is
 * cancellable.
 *
 * @param {!Element} target The node to fire the event on.
 * @param {string} type The type of keyboard event (such as 'keyup' or
 * 'keydown').
 * @param {number} keyCode The keyCode for the event.
 * @param {(Array<string>)=} modifiers The key modifiers for the event.
 *     Accepted values are shift, ctrl, alt, meta.
 * @param {string=} key The KeyboardEvent.key value for the event.
 */
export function keyEventOn(target, type, keyCode, modifiers, key) {
  target.dispatchEvent(keyboardEventFor(type, keyCode, modifiers, key));
}

/**
 * Fires a 'keydown' event on a specific node. This event bubbles and is
 * cancellable.
 *
 * @param {!Element} target The node to fire the event on.
 * @param {number} keyCode The keyCode for the event.
 * @param {(Array<string>)=} modifiers The key modifiers for the event.
 *     Accepted values are shift, ctrl, alt, meta.
 * @param {string=} key The KeyboardEvent.key value for the event.
 */
export function keyDownOn(target, keyCode, modifiers, key) {
  keyEventOn(target, 'keydown', keyCode, modifiers, key);
}

/**
 * Fires a 'keyup' event on a specific node. This event bubbles and is
 * cancellable.
 *
 * @param {!Element} target The node to fire the event on.
 * @param {number} keyCode The keyCode for the event.
 * @param {(Array<string>)=} modifiers The key modifiers for the event.
 *     Accepted values are shift, ctrl, alt, meta.
 * @param {string=} key The KeyboardEvent.key value for the event.
 */
export function keyUpOn(target, keyCode, modifiers, key) {
  keyEventOn(target, 'keyup', keyCode, modifiers, key);
}

export function enterDown(target) {
  keyDownOn(target, 13, [], 'Enter');
}

export function enterUp(target) {
  keyUpOn(target, 13, [], 'Enter');
}

export function enter(target) {
  enterDown(target);
  enterUp(target);
}

export function spaceDown(target) {
  keyDownOn(target, 32, [], ' ');
}

export function spaceUp(target) {
  keyUpOn(target, 32, [], ' ');
}

export function space(target) {
  spaceDown(target);
  spaceUp(target);
}

export function shiftTabDown(target) {
  keyDownOn(target, 9, ['shift'], 'Tab');
}

export function shiftTabUp(target) {
  keyUpOn(target, 9, ['shift'], 'Tab');
}

export function shiftTabEvent() {
  return keyboardEventFor('keydown', 9, ['shift'], 'Tab');
}

export function tabDown(target) {
  keyDownOn(target, 9, [], 'Tab');
}

export function tabUp(target) {
  keyUpOn(target, 9, [], 'Tab');
}
