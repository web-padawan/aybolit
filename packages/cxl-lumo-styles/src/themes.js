import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import cxlVaadinContextMenuItemStyles from './styles/themes/vaadin-context-menu-item-css.js';
import cxlVaadinOverlayStyles from './styles/themes/vaadin-overlay-css.js';
import cxlVaadinTabStyles from './styles/themes/vaadin-tab-css.js';
import cxlVaadinTabsStyles from './styles/themes/vaadin-tabs-css.js';

/* Mixins */
registerStyles('vaadin-context-menu-item', cxlVaadinContextMenuItemStyles, {
  moduleId: 'cxl-vaadin-context-menu-item-styles'
});
registerStyles('vaadin-overlay', cxlVaadinOverlayStyles, {
  moduleId: 'cxl-vaadin-overlay-styles'
});
registerStyles('vaadin-tab', cxlVaadinTabStyles, {
  moduleId: 'cxl-vaadin-tab-styles'
});
registerStyles('vaadin-tabs', cxlVaadinTabsStyles, {
  moduleId: 'cxl-vaadin-tabs-styles'
});
