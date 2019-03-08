# Aybolit White Label

Aybolit White Label is a set of the web components with bare minimum of styles.

## Overview

Aybolit White Label is opinionated library not based on any CSS framework. The idea behind it is to provide a meaningful set of default styles easy to extend and override. You might consider it a boilerplate for building your next  design system using Web Components. Unlike other Aybolit implementations, White Label doesn't provide any custom CSS properties.

## Installation

Aybolit White Label is available as [npm package](https://www.npmjs.com/package/@aybolit/white-label):

```sh
# with npm
npm i @aybolit/white-label --save

# with yarn
yarn add @aybolit/white-label
```

Import either all or individual components:

```js
// all components
import '@aybolit/white-label';

// button only
import { AbwButton } from '@aybolit/white-label';
```

You can also use get Aybolit White Label from the CDN:

```html
<script src="https://unpkg.com/@aybolit/white-label@latest?module" type="module"></script>
```

## Components

- [x] Button
- [x] Checkbox
- [x] Progress
- [x] Range
- [x] Switch

## Examples

```html
<!-- Button -->
<abw-button>Button</abw-button>
<abw-button disabled>Disabled</abw-button>
<abw-button link="https://example.com">Link</abw-button>

<!-- Checkbox -->
<abw-checkbox>Unchecked</abw-checkbox>
<abw-checkbox checked>Checked</abw-checkbox>
<abw-checkbox indeterminate>Indeterminate</abw-checkbox>

<!-- Progress (indeterminate) -->
<abw-progress></abw-progress>

<!-- Progress (determinate) -->
<abw-progress value="50" max="100"></abw-progress>

<!-- Range -->
<abw-range min="0" max="10" value="5"></abw-range>

<!-- Switch -->
<abw-switch>Unchecked</abw-switch>
<abw-switch checked>Checked</abw-switch>
```

## Extending Components

You can extend and override white label component like this:

```js
import { AbwButton } from '@aybolit/white-label';
import { css } from 'lit-element';

class CustomButton extends AbwButton {
  static get styles() {
    return [
      /* white-label styles */
      super.styles,
      /* your own CSS */
      css`
        .button {
          color: var(--my-button-color, #111);
        }
      `
    ];
  }
}

customElements.define('custom-button', CustomButton);
```

**Note:** white label components register themselves in global CustomElementRegistry via `customElements.define()`. If you want to avoid this, import the component styles only, and use them with the base class from [`@aybolit/core`](https://github.com/web-padawan/aybolit/tree/master/packages/core):

```js
import { ButtonElement } from '@aybolit/core';
import { abwButtonStyles } from '@aybolit/white-label';
import { css } from 'lit-element';

class CustomButton extends ButtonElement {
  static get styles() {
    return [
      /* core styles */
      super.styles,
      /* white-label styles */
      abwButtonStyles,
      /* your own CSS */
      css`
        .button {
          color: var(--my-button-color, #111);
        }
      `
    ];
  }
}

customElements.define('custom-button', CustomButton);
```
