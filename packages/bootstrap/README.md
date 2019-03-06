# Aybolit Bootstrap

Aybolit Bootstrap is a set of the web components inspired by [Bootstrap](https://getbootstrap.com) framework.

## Overview

Bootstrap 4 is used as a base, but Aybolit does not preserve the original CSS, cuts some corners and makes adjustments here and there. The main idea behind these changes is flexible theming support, with reasonable bundle size.

The upcoming Bootstrap 5, expected to land this year, will likely introduce a lot of changes to be adapted by Aybolit. The first-class Web Components support for Bootstrap was requested, and is considered by maintainers as [possible for v6](https://github.com/twbs/bootstrap/issues/28131#issuecomment-458453934).

## Installation

Aybolit Bootstrap is available as [npm package](https://www.npmjs.com/package/@aybolit/bootstrap):

```sh
# with npm
npm i @aybolit/bootstrap --save

#with yarn
yarn add @aybolit/bootstrap
```

Import either whole library or individual components:

```js
// whole library
import '@aybolit/bootstrap';

// button only
import { AbsButton } from '@aybolit/bootstrap';
```

You can also use get Aybolit Bootstrap from the CDN:

```html
<script src="https://unpkg.com/@aybolit/bootstrap@latest?module" type="module"></script>
```

## Components

- [x] [Button](https://getbootstrap.com/docs/4.3/components/buttons/)
  - [x] [Outline](https://getbootstrap.com/docs/4.3/components/buttons/#outline-buttons)
  - [x] [Sizes](https://getbootstrap.com/docs/4.3/components/buttons/#sizes)
  - [x] [Disabled state](https://getbootstrap.com/docs/4.3/components/buttons/#disabled-state)
  - [ ] [Active state](https://getbootstrap.com/docs/4.3/components/buttons/#active-state) - setting programmatically not planned.
  - [ ] [Toggle state](https://getbootstrap.com/docs/4.3/components/buttons/#toggle-states) - not currently supported.
- [x] [Checkbox](https://getbootstrap.com/docs/4.3/components/forms/#checkboxes)
- [x] [Progress](https://getbootstrap.com/docs/4.3/components/progress/)
  - [x] [Backgrounds](https://getbootstrap.com/docs/4.3/components/progress/#backgrounds)
  - [x] [Sizes](https://getbootstrap.com/docs/4.3/components/progress/#height)
  - [ ] [Animated stripes](https://getbootstrap.com/docs/4.3/components/progress/#animated-stripes) - not currently supported.
  - [ ] [Labels](https://getbootstrap.com/docs/4.3/components/progress/#labels) - not currently supported.
  - [ ] [Multiple bars](https://getbootstrap.com/docs/4.3/components/progress/#multiple-bars) - not planned.
- [x] [Range](https://getbootstrap.com/docs/4.3/components/forms/#range)
- [x] [Switch](https://getbootstrap.com/docs/4.3/components/forms/#switches)

## Examples

```html
<!-- Button -->
<abs-button>Button</abs-button>
<abs-button theme="primary">Primary theme</abs-button>
<abs-button size="small">Small size</abs-button>
<abs-button link="https://example.com">Link</abs-button>

<!-- Checkbox -->
<abs-checkbox>Unchecked</abs-checkbox>
<abs-checkbox checked>Checked</abs-checkbox>
<abs-checkbox indeterminate>Indeterminate</abs-checkbox>

<!-- Progress -->
<abs-progress value="50" max="100"></abs-progress>

<!-- Range -->
<abs-range min="0" max="10" value="5"></abs-range>

<!-- Switch -->
<abs-switch>Unchecked</abs-switch>
<abs-switch checked>Checked</abs-switch>
```

## Theme Variants

All the components can be themed using `theme` attribute with one of the following values:

- `primary`
- `info`
- `success`
- `warning`
- `danger`

The colors for each theme variant can be adjusted using custom CSS properties listed below.

## Custom CSS Properties

The following custom CSS properties are available for styling.

### General Theme

Changing these properties affect all the components at the level of cascade where they are specified. Keep in mind that lightness level is used as base for automatic contrast adjustment, so changing it might affect e.g. buttons text color.

| Property | Description | Fallback |
|----------|-------------|----------|
| `--abs-primary-h` | Primary color hue | 211 |
| `--abs-primary-s` | Primary color saturation | 100 |
| `--abs-primary-l` | Primary color lightness | 48 |
| `--abs-info-h` | Info color hue | 188 |
| `--abs-info-s` | Info color saturation | 78 |
| `--abs-info-l` | Info color lightness | 41 |
| `--abs-success-h` | Success color hue | 134 |
| `--abs-success-s` | Success color saturation | 61 |
| `--abs-success-l` | Success color lightness | 41 |
| `--abs-warning-h` | Warning color hue | 45 |
| `--abs-warning-s` | Warning color saturation | 100 |
| `--abs-warning-l` | Warning color lightness | 60 |
| `--abs-danger-h` | Danger color hue | 354 |
| `--abs-danger-s` | Danger color saturation | 70 |
| `--abs-danger-l` | Danger color lightness | 48 |

### Individual Components

These properties expose certain colors not covered by general theme settings.

| Component | Property | Description | Fallback |
|-----------|----------|-------------|----------|
| Button    | `--abs-button-bg-color` | Un-themed button background | #fff |
| Button    | `--abs-button-border-color` | Un-themed button border color | transparent |
| Button    | `--abs-button-color` | Un-themed button color | #212529 |
| Checkbox  | `--abs-checkbox-border-color` | Unchecked state border color | #adb5bd |
| Checkbox  | `--abs-checkbox-disabled-bg` | Disabled unchecked state background | #e9ecef |
| Checkbox  | `--abs-checkbox-disabled-text` | Disabled state text color | #6c757d |
| Progress  | `--abs-progress-bar-color` | Progress bar color | #e9ecef |
| Range     | `--abs-range-track-bg` | Track background | #dee2e6 |
| Range     | `--abs-range-disabled-bg` | Disabled state thumb background | #adb5bd |
| Switch    | `--abs-switch-disabled-bg` | Disabled off state background | #e9ecef |
| Switch    | `--abs-switch-disabled-text` | Disabled off state text color | #6c757d |
| Switch    | `--abs-switch-off-thumb-bg` | Off state thumb background | #adb5bd |
| Switch    | `--abs-switch-off-track-bg` | Off state track background | #fff |
| Switch    | `--abs-switch-off-track-border` | Off state track border color | #adb5bd |
| Switch    | `--abs-switch-on-thumb-bg` | On state thumb background | #fff |
