import { css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import { registerGlobalStyles } from './utils.js';
import '@vaadin/vaadin-lumo-styles/font-icons.js';
import '@vaadin/vaadin-lumo-styles/icons.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';

import iconsetCXL from '../icons/cxl.html';

/**
 * Vaadin iconset and font build process. They ship 600 icons, we only need some.
 *
 * 1. `conversionxl/vaadin-icons` fork has a custom `gulpfile.js`, clone, install deps.
 * 2. vaadin-icons/gulpfile.js: modify `const cxlVaadinIconset`
 * 3. vaadin-icons: run `npx gulp icons iconfont`
 * 4. vaadin-icons/iconset.html: copy-paste `<g>` elements -> cxl-lumo-styles/icons/vaadin.html
 * 5. vaadin-icons/vaadin-icons.woff2: copy-paste base64 encoding -> cxl-lumo-styles/icons/vaadin-font.html
 * 6. cxl-lumo-styles/icons/vaadin-font.html: add / change CSS custom properties, get unicode values from `gulp iconfont` task output
 */
import iconsetVaadin from '../icons/vaadin.html';
import iconfontVaadin from '../icons/vaadin-font.html';

registerGlobalStyles(
  css`
    iron-icon[icon='vaadin:play-circle-o'] {
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%, 0% 75%); /* "In-progress". */
    }
  `,
  {
    moduleId: 'cxl-lumo-styles-icons'
  }
);

const $documentContainer = document.createElement('template');

$documentContainer.innerHTML = `
  ${iconsetCXL}
  ${iconsetVaadin}
  ${iconfontVaadin}
`;

document.head.appendChild($documentContainer.content);
