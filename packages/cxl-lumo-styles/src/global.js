import styles from './styles/global-css.js';

const $template = document.createElement('template');
$template.innerHTML = `
  <style id="cxl-lumo-styles-global">${styles}</style>
`;
document.head.appendChild($template.content);
