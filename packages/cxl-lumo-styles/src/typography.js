import '@vaadin/vaadin-lumo-styles/typography.js';
import styles from './styles/typography-css.js';

const $template = document.createElement('template');
$template.innerHTML = `
  <custom-style>
    <style id="cxl-lumo-styles-typography" include="lumo-typography">${styles}</style>
  </custom-style>
`;
document.head.appendChild($template.content);
