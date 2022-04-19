import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('cxl-jw-player')
export class CXLJWPlayerElement extends LitElement {
  @property() playerId;
  @property() videoId;

  __jwPlayer;

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          height: 100%;
        }
      </style>

      <slot></slot>
    `;
  }

  async firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    const el = document.createElement('div');
    el.hidden = true;
    this.appendChild(el);

    await this.__loadScript();
    await this.__jwPlayer;

    const media = await this.__getMedia();

    const instance = this.__jwPlayer(el).setup({
      width: '100%',
      height: '100%',
      ...media,
    });

    await promisify(instance.on, instance)('ready');

    this.shadowRoot.appendChild(el);
  }

  get __scriptUrl() {
    return `https://content.jwplatform.com/libraries/${this.playerId}.js`;
  }

  async __getMedia() {
    return await (await fetch(`https://cdn.jwplayer.com/v2/media/${this.videoId}`)).json();
  }

  async __loadScript() {
    this.__jwPlayer = new Promise((resolve) => {
      const el = document.createElement('script');
      el.src = this.__scriptUrl;
      el.onload = () => {
        this.__jwPlayer = self['jwplayer'];
        resolve();
      };
      document.head.appendChild(el);
    });
  }
}

export function promisify(fn) {
  return (...args) =>
    new Promise((resolve) => {
      fn(...args, (...res) => {
        if (res.length > 1) resolve(res);
        else resolve(res[0]);
      });
    });
}
