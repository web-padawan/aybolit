export const ItemMixin = superClass =>
  class extends superClass {
    /**
     * Used for mixin detection because `instanceof` does not work with mixins.
     */
    static get hasLitItemMixin() {
      return true;
    }

    static get properties() {
      return {
        /**
         * If true, the user cannot interact with this element.
         */
        disabled: {
          type: Boolean,
          reflect: true
        },

        /**
         * If true, the item is in selected state.
         */
        selected: {
          type: Boolean,
          reflect: true
        }
      };
    }

    constructor() {
      super();
      this.selected = false;
    }

    update(props) {
      super.update(props);

      if (props.has('disabled')) {
        this._disabledChanged(this.disabled);
      }
      if (props.has('selected')) {
        this._selectedChanged(this.selected);
      }
    }

    firstUpdated() {
      super.firstUpdated();

      this.addEventListener('focus', () => this._setFocused(true), true);
      this.addEventListener('blur', () => this._setFocused(false), true);
      this.addEventListener('mousedown', () => {
        this._setActive((this._mousedown = true));
        const mouseUpListener = () => {
          this._setActive((this._mousedown = false));
          document.removeEventListener('mouseup', mouseUpListener);
        };
        document.addEventListener('mouseup', mouseUpListener);
      });
      this.addEventListener('keydown', e => this._onKeydown(e));
      this.addEventListener('keyup', e => this._onKeyup(e));
    }

    _selectedChanged(selected) {
      this.setAttribute('aria-selected', selected);
    }

    _disabledChanged(disabled) {
      if (disabled) {
        this.selected = false;
        this.setAttribute('aria-disabled', 'true');
        this.blur();
      } else {
        this.removeAttribute('aria-disabled');
      }
    }

    _setFocused(focused) {
      if (focused) {
        this.setAttribute('focused', '');
        if (!this._mousedown) {
          this.setAttribute('focus-ring', '');
        }
      } else {
        this.removeAttribute('focused');
        this.removeAttribute('focus-ring');
        this._setActive(false);
      }
    }

    _setActive(active) {
      if (active) {
        this.setAttribute('active', '');
      } else {
        this.removeAttribute('active');
      }
    }

    _onKeydown(event) {
      if (/^( |SpaceBar|Enter)$/.test(event.key) && !event.defaultPrevented) {
        event.preventDefault();
        this._setActive(true);
      }
    }

    _onKeyup() {
      if (this.hasAttribute('active')) {
        this._setActive(false);
        this.click();
      }
    }
  };
