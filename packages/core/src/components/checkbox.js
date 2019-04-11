import { LitElement, html } from 'lit-element';
import { DelegateFocusMixin } from '../mixins/delegate-focus-mixin.js';
import checkboxBaseStyles from '../styles/checkbox-base-css.js';

const $$name = Symbol('name');

export class CheckboxElement extends DelegateFocusMixin(LitElement) {
  static get properties() {
    return {
      /**
       * True if the checkbox is checked.
       */
      checked: {
        type: Boolean,
        reflect: true
      },

      /**
       * Indeterminate is a state in which it's impossible to say
       * whether the checkbox is toggled on or off.
       */
      indeterminate: {
        type: Boolean,
        reflect: true
      },

      /**
       * The value given to the data submitted with the name
       * to the server when the checkbox is inside a form.
       */
      value: {
        reflect: true
      }
    };
  }

  static get styles() {
    return checkboxBaseStyles;
  }

  constructor() {
    super();
    this.checked = false;
    this.value = 'on';
  }

  render() {
    return html`
      <label class="checkbox">
        <input
          type="checkbox"
          class="input"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          .indeterminate="${this.indeterminate}"
          @change="${this._onChange}"
          role="presentation"
          tabindex="-1"
        />
        <span class="label"><slot></slot></span>
      </label>
    `;
  }

  firstUpdated() {
    super.firstUpdated();

    const name = this.getAttribute('name');
    if (name) {
      this.name = name;
    }

    this.setAttribute('role', 'checkbox');
  }

  update(props) {
    super.update(props);

    if (props.has('indeterminate')) {
      this._indeterminateChanged(this.indeterminate);
    }

    if (props.has('checked')) {
      this._checkedChanged(this.checked);
    }
  }

  get focusElement() {
    return this.shadowRoot.querySelector('input');
  }

  get name() {
    return this.checked ? this[$$name] : '';
  }

  set name(name) {
    this[$$name] = name;
  }

  _checkedChanged(checked) {
    if (this.indeterminate) {
      this.setAttribute('aria-checked', 'mixed');
    } else {
      this.setAttribute('aria-checked', checked);
    }
    this.dispatchEvent(
      new CustomEvent('checked-changed', {
        detail: { value: checked }
      })
    );
  }

  _indeterminateChanged(indeterminate) {
    if (indeterminate) {
      this.setAttribute('aria-checked', 'mixed');
    } else {
      this.setAttribute('aria-checked', this.checked);
    }
  }

  _onChange(e) {
    const target = e.composedPath()[0];
    this.checked = target.checked;
    this.indeterminate = target.indeterminate;

    // In the Shadow DOM, the `change` event is not leaked
    // into the ancestor tree, so we must do this manually.
    const changeEvent = new CustomEvent('change', {
      detail: {
        sourceEvent: e
      },
      bubbles: e.bubbles,
      cancelable: e.cancelable
    });
    this.dispatchEvent(changeEvent);
  }
}
