import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import cxlAccordionCardStyles from './styles/themes/cxl-accordion-card-css.js';
import cxlVaadinAccordionStyles from './styles/themes/vaadin-accordion-css.js';
import cxlVaadinAccordionPanelStyles from './styles/themes/vaadin-accordion-panel-css.js';
import cxlVaadinContextMenuItemStyles from './styles/themes/vaadin-context-menu-item-css.js';
import cxlVaadinContextMenuListBoxStyles from './styles/themes/vaadin-context-menu-list-box-css.js';
import cxlVaadinNotificationCardStyles from './styles/themes/vaadin-notification-card-css.js';
import cxlVaadinNotificationContainerStyles from './styles/themes/vaadin-notification-container-css.js';
import cxlVaadinOverlayStyles from './styles/themes/vaadin-overlay-css.js';
import cxlVaadinTabStyles from './styles/themes/vaadin-tab-css.js';
import cxlVaadinTabsStyles from './styles/themes/vaadin-tabs-css.js';

/* Mixins */
registerStyles('cxl-accordion-card', cxlAccordionCardStyles, {
  moduleId: 'cxl-accordion-card-styles',
});
registerStyles('vaadin-accordion', cxlVaadinAccordionStyles, {
  moduleId: 'cxl-vaadin-accordion-styles',
});
registerStyles('vaadin-accordion-panel', cxlVaadinAccordionPanelStyles, {
  moduleId: 'cxl-vaadin-accordion-panel-styles',
});
registerStyles('vaadin-context-menu-item', cxlVaadinContextMenuItemStyles, {
  moduleId: 'cxl-vaadin-context-menu-item-styles',
});
registerStyles('vaadin-context-menu-list-box', cxlVaadinContextMenuListBoxStyles, {
  moduleId: 'cxl-vaadin-context-menu-list-box-styles',
});
registerStyles('vaadin-notification-card', cxlVaadinNotificationCardStyles, {
  moduleId: 'cxl-vaadin-notification-card-styles',
});
registerStyles('vaadin-notification-container', cxlVaadinNotificationContainerStyles, {
  moduleId: 'cxl-vaadin-notification-container-styles',
});
registerStyles('vaadin-overlay', cxlVaadinOverlayStyles, {
  moduleId: 'cxl-vaadin-overlay-styles',
});
registerStyles('vaadin-tab', cxlVaadinTabStyles, {
  moduleId: 'cxl-vaadin-tab-styles',
});
registerStyles('vaadin-tabs', cxlVaadinTabsStyles, {
  moduleId: 'cxl-vaadin-tabs-styles',
});
