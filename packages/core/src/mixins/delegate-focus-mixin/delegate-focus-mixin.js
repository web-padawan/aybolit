const $$tabindex = Symbol('tabindex');
const $$oldTabindex = Symbol('oldTabindex');
const $$newTabindex = Symbol('newTabindex');

export const DelegateFocusMixin = superClass =>
  class extends superClass {
    static get properties() {
      return {
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
        }
      };
    }

    constructor() {
      super();
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

    firstUpdated() {
      this.addEventListener('focusin', e => {
        if (e.composedPath()[0] === this) {
          this._focus();
        }
      });

      this.addEventListener('keydown', e => {
        if (!e.defaultPrevented && e.shiftKey && e.keyCode === 9) {
          // Flag is checked in _focus event handler.
          this._isShiftTabbing = true;
          HTMLElement.prototype.focus.apply(this);
          // Event handling in IE is asynchronous and the flag is removed asynchronously as well
          setTimeout(() => {
            this._isShiftTabbing = false;
          }, 0);
        }
      });
    }

    update(props) {
      if (props.has('disabled')) {
        this._disabledChanged(this.disabled, props.get('disabled'));
      }

      if (props.has('tabIndex')) {
        // save value of tabindex, as it can be overridden to
        // undefined in case if the element is disabled
        this[$$newTabindex] = this.tabIndex;
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

      if (props.has('tabIndex') && this[$$newTabindex] !== undefined) {
        this.focusElement.tabIndex = this[$$newTabindex];
        this[$$newTabindex] = undefined;
      }
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
    }

    /**
     * Native bluring in the host element does nothing because it does not have the focus.
     * In chrome it works, but not in FF.
     * @protected
     */
    blur() {
      this.focusElement.blur();
    }

    _disabledChanged(disabled, oldDisabled) {
      if (disabled) {
        this[$$oldTabindex] = this.tabIndex;
        this.tabIndex = -1;
        this.setAttribute('aria-disabled', 'true');
      } else if (oldDisabled) {
        if (this[$$oldTabindex] !== undefined) {
          this.tabIndex = this[$$oldTabindex];
        }
        this.removeAttribute('aria-disabled');
      }
    }

    _tabIndexChanged(tabindex) {
      if (this.disabled && tabindex) {
        // If tabindex attribute was changed while checkbox was disabled
        if (this.tabIndex !== -1) {
          this[$$oldTabindex] = this.tabIndex;
        }
        this.tabIndex = null;
      }
    }
  };
