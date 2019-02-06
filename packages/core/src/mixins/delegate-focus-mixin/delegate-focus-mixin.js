const $$tabindex = Symbol('tabindex');

export const DelegateFocusMixin = superClass =>
  class extends superClass {
    static get properties() {
      return {
        /**
         * Specify that this control should have input focus when the page loads.
         */
        autofocus: {
          type: Boolean,
          reflect: true
        },

        tabIndex: {
          converter: {
            fromAttribute: Number,
            toAttribute: value => (value == null ? null : value.toString())
          },
          noAccessor: true,
          reflect: true
        },

        /**
         * If true, the user cannot interact with this element.
         */
        disabled: {
          type: Boolean,
          reflect: true
        },

        _previousTabIndex: {
          hasChanged: () => false
        },

        _isShiftTabbing: {
          hasChanged: () => false
        }
      };
    }

    constructor() {
      super();
      this._boundKeydownListener = this._bodyKeydownListener.bind(this);
      this._boundKeyupListener = this._bodyKeyupListener.bind(this);
      if (!this.hasAttribute('tabindex')) {
        this.tabIndex = 0;
      }
    }

    get tabIndex() {
      return this[$$tabindex];
    }

    set tabIndex(value) {
      const oldValue = this[$$tabindex];
      this[$$tabindex] = value;
      this.requestUpdate('tabIndex', oldValue);
    }

    /**
     * @protected
     */
    connectedCallback() {
      super.connectedCallback();

      document.body.addEventListener('keydown', this._boundKeydownListener, true);
      document.body.addEventListener('keyup', this._boundKeyupListener, true);
    }

    /**
     * @protected
     */
    disconnectedCallback() {
      super.disconnectedCallback();

      document.body.removeEventListener('keydown', this._boundKeydownListener, true);
      document.body.removeEventListener('keyup', this._boundKeyupListener, true);

      // in non-Chrome browsers, blur does not fire on the element when it is disconnected.
      // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.
      if (this.hasAttribute('focused')) {
        this._setFocused(false);
      }
    }

    firstUpdated() {
      this.addEventListener('focusin', e => {
        if (e.composedPath()[0] === this) {
          this._focus(e);
        } else if (e.composedPath().indexOf(this.focusElement) !== -1 && !this.disabled) {
          this._setFocused(true);
        }
      });

      this.addEventListener('focusout', () => this._setFocused(false));

      this.addEventListener('keydown', e => {
        if (!e.defaultPrevented && e.shiftKey && e.keyCode === 9) {
          // Flag is checked in _focus event handler.
          this._isShiftTabbing = true;
          HTMLElement.prototype.focus.apply(this);
          this._setFocused(false);
          // Event handling in IE is asynchronous and the flag is removed asynchronously as well
          setTimeout(() => {
            this._isShiftTabbing = false;
          }, 0);
        }
      });

      if (this.autofocus && !this.disabled) {
        window.requestAnimationFrame(() => {
          this._focus();
          this._setFocused(true);
          this.setAttribute('focus-ring', '');
        });
      }
    }

    update(props) {
      if (props.has('disabled')) {
        this._disabledChanged(this.disabled, props.get('disabled'));
      }

      if (props.has('tabIndex')) {
        // save value of tabindex, as it can be overridden to
        // undefined in case if the element is disabled
        this.__tabIndexValue = this.tabIndex;
        this._tabIndexChanged(this.tabIndex);
      }

      super.update(props);
    }

    updated(props) {
      super.updated(props);

      if (props.has('disabled')) {
        this.focusElement.disabled = this.disabled;
        if (this.disabled) {
          this.blur();
        }
      }

      if (props.has('tabIndex') && this.__tabIndexValue !== undefined) {
        this.focusElement.tabIndex = this.__tabIndexValue;
      }
    }

    _setFocused(focused) {
      if (focused) {
        this.setAttribute('focused', '');
      } else {
        this.removeAttribute('focused');
      }

      // focus-ring is true when the element was focused from the keyboard.
      if (focused && this._tabPressed) {
        this.setAttribute('focus-ring', '');
      } else {
        this.removeAttribute('focus-ring');
      }
    }

    _bodyKeydownListener(e) {
      this._tabPressed = e.keyCode === 9;
    }

    _bodyKeyupListener() {
      this._tabPressed = false;
    }

    /**
     * Any element extending this mixin is required to implement this getter.
     * It returns the actual focusable element in the component.
     */
    get focusElement() {
      window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);
      return this;
    }

    _focus() {
      if (this._isShiftTabbing) {
        return;
      }

      this.focusElement.focus();
      this._setFocused(true);
    }

    /**
     * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
     * @protected
     */
    focus() {
      if (this.disabled) {
        return;
      }

      this.focusElement.focus();
      this._setFocused(true);
    }

    /**
     * Native bluring in the host element does nothing because it does not have the focus.
     * In chrome it works, but not in FF.
     * @protected
     */
    blur() {
      this.focusElement.blur();
      this._setFocused(false);
    }

    _disabledChanged(disabled, oldDisabled) {
      if (disabled) {
        this._previousTabIndex = this.tabIndex;
        this.tabIndex = -1;
        this.setAttribute('aria-disabled', 'true');
      } else if (oldDisabled) {
        if (this._previousTabIndex !== undefined) {
          this.tabIndex = this._previousTabIndex;
        }
        this.removeAttribute('aria-disabled');
      }
    }

    _tabIndexChanged(tabindex) {
      if (this.disabled && tabindex) {
        // If tabindex attribute was changed while checkbox was disabled
        if (this.tabIndex !== -1) {
          this._previousTabIndex = this.tabIndex;
        }
        this.tabIndex = null;
      }
    }
  };
