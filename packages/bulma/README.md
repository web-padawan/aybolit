# Aybolit Bulma

Aybolit Bulma is a set of the web components inspired by [Bulma](https://bulma.io) CSS framework.

## Overview

Bulma framework and [Bulma-extensions](https://wikiki.github.io) are used as a base, but Aybolit does not preserve all the original CSS and makes certain adjustments. The main idea behind these changes is flexible theming support, with reasonable bundle size.

## Installation

Aybolit Bulma is available as [npm package](https://www.npmjs.com/package/@aybolit/bulma):

```sh
# with npm
npm i @aybolit/bulma --save

# with yarn
yarn add @aybolit/bulma
```

Import either all or individual components:

```js
// all components
import '@aybolit/bulma';

// button only
import { AbuButton } from '@aybolit/bulma';
```

You can also use get Aybolit Bulma from the CDN:

```html
<script src="https://unpkg.com/@aybolit/bulma@latest?module" type="module"></script>
```

## Components

- [x] [Button](https://bulma.io/documentation/elements/button/)
  - [x] [Colors](https://bulma.io/documentation/elements/button/#colors)
  - [x] [Sizes](https://bulma.io/documentation/elements/button/#sizes)
  - [x] Outline style
  - [x] Rounded style
  - [ ] Fullwidth style - not currently supported.
  - [ ] Inverted style - not currently supported.
  - [ ] Loading state - not currently supported.
  - [ ] Static state - not planned.
- [x] [Checkbox](https://wikiki.github.io/form/checkradio/)
  - [x] [Colors](https://wikiki.github.io/form/checkradio/#colors)
  - [x] [Sizes](https://wikiki.github.io/form/checkradio/#sizes)
  - [x] Filled style
  - [ ] Rounded style - not planned.
  - [ ] Block style - not planned.
  - [ ] No-border style - not planned.
- [x] [Progress](https://bulma.io/documentation/elements/progress/)
  - [x] [Colors](https://bulma.io/documentation/elements/progress/#colors)
  - [x] [Sizes](https://bulma.io/documentation/elements/progress/#sizes)
  - [x] [Indeterminate](https://bulma.io/documentation/elements/progress/#indeterminate)
- [x] [Range](https://wikiki.github.io/form/slider/)
  - [x] [Colors](https://wikiki.github.io/form/slider/#colors)
  - [x] [Sizes](https://wikiki.github.io/form/slider/#sizes)
  - [x] Rounded style
  - [ ] Vertical orientation - not currently supported.
- [x] [Switch](https://wikiki.github.io/form/switch/)
  - [x] [Colors](https://wikiki.github.io/form/switch/#colors)
  - [x] [Sizes](https://wikiki.github.io/form/switch/#sizes)
  - [x] Outlined style
  - [x] Rounded style
  - [ ] Thin style - not currently supported.

## Examples

```html
<!-- Button -->
<abu-button>Button</abu-button>
<abu-button theme="primary">Primary theme</abu-button>
<abu-button size="small">Small size</abu-button>
<abu-button link="https://example.com">Link</abu-button>

<!-- Checkbox -->
<abu-checkbox>Unchecked</abu-checkbox>
<abu-checkbox checked>Checked</abu-checkbox>
<abu-checkbox indeterminate>Indeterminate</abu-checkbox>

<!-- Progress -->
<abu-progress value="50" max="100"></abu-progress>

<!-- Range -->
<abu-range min="0" max="10" value="5"></abu-range>

<!-- Switch -->
<abu-switch>Unchecked</abu-switch>
<abu-switch checked>Checked</abu-switch>
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
| `--abu-primary-h` | Primary color hue | 171 |
| `--abu-primary-s` | Primary color saturation | 100 |
| `--abu-primary-l` | Primary color lightness | 41 |
| `--abu-info-h` | Info color hue | 204 |
| `--abu-info-s` | Info color saturation | 86 |
| `--abu-info-l` | Info color lightness | 48 |
| `--abu-success-h` | Success color hue | 141 |
| `--abu-success-s` | Success color saturation | 71 |
| `--abu-success-l` | Success color lightness | 48 |
| `--abu-warning-h` | Warning color hue | 48 |
| `--abu-warning-s` | Warning color saturation | 100 |
| `--abu-warning-l` | Warning color lightness | 67 |
| `--abu-danger-h` | Danger color hue | 348 |
| `--abu-danger-s` | Danger color saturation | 100 |
| `--abu-danger-l` | Danger color lightness | 48 |

### Individual Components

These properties expose certain colors not covered by general theme settings.

| Component | Property | Description | Fallback |
|-----------|----------|-------------|----------|
| Button    | `--abu-button-bg-color` | Un-themed button background | #fff |
| Button    | `--abu-button-border-color` | Un-themed button border color | #dbdbdb |
| Button    | `--abu-button-color` | Un-themed button color | #363636 |
| Button    | `--abu-button-active-border-color` | Un-themed active button border color | #4a4a4a |
| Button    | `--abu-button-hover-border-color` | Un-themed hover button border color | #b5b5b5 |
| Checkbox  | `--abu-checkbox-border-color` | Unchecked state border color | #dbdbdb |
| Progress  | `--abu-progress-bar-color` | Progress bar color | #dbdbdb |
| Progress  | `--abu-progress-value-color` | Un-themed progress value color | #4a4a4a |
| Range     | `--abu-range-thumb-bg` | Thumb background | #fff |
| Range     | `--abu-range-track-bg` | Track background | #b5b5b5 |
| Switch    | `--abu-switch-thumb-bg` | Thumb background | #fff |
| Switch    | `--abu-switch-track-bg` | Off state track background | #b5b5b5 |
