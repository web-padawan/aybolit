# Aybolit Core

Aybolit Core is a set of base classes built with [LitElement](https://github.com/Polymer/lit-element). Each class can be extended and registered as custom element.

## Overview

Aybolit Core is meant to be used as a base for creating themable web components. It does not provide any CSS except for certain "normalize" styles (especially, [`hidden`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) attribute is forced to use `display: none !important` for all components).

## Installation

Aybolit Core is available as [npm package](https://www.npmjs.com/package/@aybolit/core):

```sh
# with npm
npm i @aybolit/core --save

# with yarn
yarn add @aybolit/core
```

## Components

- [x] Button
- [x] Checkbox
- [x] Progress
- [x] Range
- [x] Switch

## Creating Components

You can extend a component base class like this:

```js
import { ButtonElement } from '@aybolit/core';
import { css } from 'lit-element';

class CustomButton extends ButtonElement {
  static get styles() {
    return [
      /* core styles */
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
