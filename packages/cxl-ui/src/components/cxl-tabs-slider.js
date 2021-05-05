import '@conversionxl/cxl-lumo-styles';
import { TabsElement } from '@vaadin/vaadin-tabs';
import { customElement } from 'lit-element';

@customElement('cxl-tabs-slider')
export class CXLTabsSliderElement extends TabsElement {
  _updateOverflow() {
    this.centeredContainerWidthCheck();
    super._updateOverflow();
  }

  /**
   * We want [theme~="centered"] so element would does not hug viewport edge, and gap the other edge.
   *
   * Upstream vaadin-tabs[theme~="centered"] fails to correctly calculate overflow on narrow viewports,
   * user cannot see or scroll to start elements.
   *
   * We hereby apply [theme~="centered"] only when full element width fits into viewport.
   *
   * @see https://github.com/vaadin/web-components/blob/v20.0.0-beta1/packages/vaadin-tabs/src/vaadin-tabs.js#L222-L240
   * @see https://lit-and-friends.slack.com/archives/C6ULJ2F7S/p1620125717028800
   */
  centeredContainerWidthCheck() {
    const themeAttr = 'theme';
    const centeredVal = 'centered';

    let themes = this.getAttribute(themeAttr).split(' ');
    const isCentered = themes.includes(centeredVal);

    if (this._scrollerElement.scrollWidth > parseInt(getComputedStyle(this).width, 10)) {
      if (isCentered) {
        themes = themes.filter((theme) => theme !== centeredVal);
      }
    } else if (!isCentered) {
      themes.push(centeredVal);
    }

    this.setAttribute(themeAttr, themes.join(' '));
  }

  static get is() {
    return 'cxl-tabs-slider';
  }
}
