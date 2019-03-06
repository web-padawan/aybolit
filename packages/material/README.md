# Aybolit Material

Aybolit Material is a set of the web components inspired by [Material Design](https://material.io).

## Overview

Aybolit Material is based on [Matter](https://github.com/finnhvman/matter), a library for creating Material Design Components in pure CSS. The reason to build on top of Matter is its custom CSS properties based architecture, which works with Web Components really nice.

The styles from Matter are preserved as much as possible, but the components variants and features, e.g. button types, should be configured via HTML attributes instead of CSS classes, in order to not affect the end user CSS.

## Installation

Aybolit Material is available as [npm package](https://www.npmjs.com/package/@aybolit/material):

```sh
# with material
npm i @aybolit/material --save

#with yarn
yarn add @aybolit/material
```

Import either whole library or individual components:

```js
// whole library
import '@aybolit/material';

// button only
import { AbmButton } from '@aybolit/material';
```

You can also use get Aybolit Material from the CDN:

```html
<script src="https://unpkg.com/@aybolit/material@latest?module" type="module"></script>
```

## Components

- [x] [Button](https://material.io/design/components/buttons.html)
  - [x] [Text button](https://material.io/design/components/buttons.html#text-button)
  - [x] [Outlined button](https://material.io/design/components/buttons.html#outlined-button)
  - [x] [Contained button](https://material.io/design/components/buttons.html#contained-button)
- [x] [Checkbox](https://material.io/design/components/selection-controls.html#checkboxes)
- [x] [Progress](https://material.io/design/components/progress-indicators.html#linear-progress-indicators)
- [x] [Range](https://material.io/design/components/sliders.html)
- [x] [Switch](https://material.io/design/components/selection-controls.html#switches)

## Examples

```html
<!-- Buttons -->
<abm-button>Text</abm-button>
<abm-button theme="outlined">Outlined</abm-button>
<abm-button theme="contained">Contained</abm-button>

<!-- Checkbox -->
<abm-checkbox>Unchecked</abm-checkbox>
<abm-checkbox checked>Checked</abm-checkbox>
<abm-checkbox indeterminate>Indeterminate</abm-checkbox>

<!-- Progress (indeterminate) -->
<abm-progress></abm-progress>

<!-- Progress (determinate) -->
<abm-progress value="50" max="100"></abm-progress>

<!-- Range -->
<abm-range min="0" max="10" value="5"></abm-range>

<!-- Switch -->
<abm-switch>Unchecked</abm-switch>
<abm-switch checked>Checked</abm-switch>
```

## Custom CSS Properties

The following custom CSS properties are available for styling.

| Property | Description | Fallback |
|----------|-------------|----------|
| `--abm-primary-rgb` | Primary color `rgb` value | 33, 150, 243 |
| `--abu-onprimary-rgb` | On primary color `rgb` value | 255, 255, 255 |
| `--abu-surface-rgb` | Surface color `rgb` value | 255, 255, 255 |
| `--abu-onsurface-rgb` | On surface color `rgb` value | 0, 0, 0 |
