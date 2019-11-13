import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import cxlVaadinOverlayStyles from './styles/themes/vaadin-overlay-css.js';
import cxlVaadinTabStyles from './styles/themes/vaadin-tab-css.js';
import cxlVaadinTabsStyles from './styles/themes/vaadin-tabs-css.js';

/* Mixins */
registerStyles('vaadin-overlay', cxlVaadinOverlayStyles, {
  moduleId: 'cxl-vaadin-overlay-styles'
});
registerStyles('vaadin-tab', cxlVaadinTabStyles, {
  moduleId: 'cxl-vaadin-tab-styles'
});
registerStyles('vaadin-tabs', cxlVaadinTabsStyles, {
  moduleId: 'cxl-vaadin-tabs-styles'
});
