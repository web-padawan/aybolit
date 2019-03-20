export const colors = Object.freeze({
  primary: 'primary',
  info: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  none: ''
});

export const sizes = Object.freeze({
  small: 'small',
  large: 'large',
  normal: ''
});

export const themes = Object.values(colors).filter(color => color !== '');

export const variants = Object.values(sizes).filter(color => color !== '');
