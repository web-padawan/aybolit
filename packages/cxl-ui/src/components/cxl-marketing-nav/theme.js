import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import cxlVaadinOverlayStyles from '../../styles/cxl-marketing-nav/theme/vaadin-overlay-css.js';
import cxlVaadinTabStyles from '../../styles/cxl-marketing-nav/theme/vaadin-tab-css.js';
import cxlVaadinTabsStyles from '../../styles/cxl-marketing-nav/theme/vaadin-tabs-css.js';
import cxlMarketingNavGlobalStyles from '../../styles/cxl-marketing-nav/theme/global-css.js';

/* Mixins */
registerStyles('vaadin-overlay', cxlVaadinOverlayStyles, {
  moduleId: 'cxl-marketing-nav-vaadin-overlay-theme'
});
registerStyles('vaadin-tab', cxlVaadinTabStyles, {
  moduleId: 'cxl-marketing-nav-vaadin-tab-theme'
});
registerStyles('vaadin-tabs', cxlVaadinTabsStyles, {
  moduleId: 'cxl-marketing-nav-vaadin-tabs-theme'
});

/* Global */
const $template = document.createElement('template');
$template.innerHTML = `<style id="cxl-marketing-nav-global">${cxlMarketingNavGlobalStyles}</style>`;
document.head.appendChild($template.content);
