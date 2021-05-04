import { customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-accordion';
import { AccordionElement } from '@vaadin/vaadin-accordion/src/vaadin-accordion';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlVaadinAccordionGlobalStyles from '../styles/global/cxl-vaadin-accordion-css.js';

/**
 * Allows opening multiple panels simultaneously.
 * Saves panel state, restores on page load.
 */
@customElement('cxl-vaadin-accordion')
export class CXLVaadinAccordionElement extends AccordionElement {
  /**
   * Global styles.
   */
  ready() {
    super.ready();

    registerGlobalStyles(cxlVaadinAccordionGlobalStyles, {
      moduleId: 'cxl-vaadin-accordion-global',
    });
  }

  // Keep track of accordion panels state.
  _updateOpened(e) {
    const target = this._filterItems(e.composedPath())[0];
    const idx = this.items.indexOf(target);

    if (e.detail.value) {
      if (target.disabled || idx === -1) {
        return;
      }

      this.opened = idx;
    } else if (!this.items.some((item) => item.opened)) {
      this.opened = null;
    }

    this._saveAccordionState(this.items, e.detail.value, idx);
  }

  // Restore accordion panel state.
  _updateItems(items, opened) {
    if (!items) {
      return;
    }

    if (!this.hasAppliedState) {
      const storageId = this.getAttribute('id');

      // Avoid null key.
      if (storageId) {
        const stateItems = JSON.parse(localStorage.getItem(storageId));

        if (stateItems) {
          items.forEach((item, key) => {
            // eslint-disable-next-line no-param-reassign
            item.opened = stateItems[key];
          });

          this.hasAppliedState = true;

          /**
           * If no state, allow initial first panel open.
           *
           * @see https://github.com/vaadin/vaadin-accordion/blob/v1.0.1/src/vaadin-accordion.html#L89
           */
        } else if (opened === 0) {
          super._updateItems(items, opened);
        }
      }
    }
  }

  // Save accordion panels state in LocalStorage.
  _saveAccordionState(items) {
    const storageId = this.getAttribute('id');

    // Avoid null key.
    if (storageId) {
      const stateItems = [];

      items.forEach((value, key) => {
        stateItems[key] = items[key].opened;
      });

      localStorage.setItem(storageId, JSON.stringify(stateItems));
    }
  }
}
