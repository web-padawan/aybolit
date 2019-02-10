import { LitElement, html } from 'lit-element';
import { DelegateFocusMixin } from '../../mixins/delegate-focus-mixin/delegate-focus-mixin.js';
import switchBaseStyles from './styles/switch-base-css.js';

export class SwitchElement extends DelegateFocusMixin(LitElement) {
  static get properties() {
    return {
      /**
       * True if the checkbox is checked.
       */
      checked: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [switchBaseStyles];
  }

  constructor() {
    super();
    this.checked = false;
  }

  render() {
    return html`
      <label class="switch">
        <input
          type="checkbox"
          class="input"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
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

    this.setAttribute('role', 'switch');
    this.setAttribute('data-action', 'aria-switch');
  }

  update(props) {
    super.update(props);

    if (props.has('checked')) {
      this._checkedChanged(this.checked);
    }
  }

  get focusElement() {
    return this.shadowRoot.querySelector('input');
  }

  _checkedChanged(checked) {
    this.setAttribute('aria-checked', checked);
    this.dispatchEvent(
      new CustomEvent('checked-changed', {
        detail: { value: checked }
      })
    );
  }

  _onChange(e) {
    const target = e.composedPath()[0];
    this.checked = target.checked;

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
