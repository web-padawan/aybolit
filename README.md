# Aybolit

Aybolit is a lightweight, standards-based, framework agnostic UI components library built with [LitElement](https://github.com/Polymer/lit-element).

> *Aybolit* is a fictional character from the children's poems by Korney Chukovsky. He is a traveling doctor who treats animals for free, regardless of their injuries. The name may be translated as "Ouch, [it] hurts!"

[Live Demo ↗](https://conversionxl.github.io/aybolit/)

[![Size Limit](https://github.com/conversionxl/aybolit/actions/workflows/size-limit.yml/badge.svg)](https://github.com/conversionxl/aybolit/actions/workflows/size-limit.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Overview

Aybolit is based on the modern web standards: [Custom Elements](https://caniuse.com/#feat=custom-elementsv1), [Shadow DOM](https://caniuse.com/#feat=shadowdomv1) and [CSS Custom Properties](https://caniuse.com/#feat=css-variables). Using these parts of the web platform allows Aybolit to easily solve several common problems which have been around for years:

1. Proper style scoping and **zero global CSS**! With Aybolit you are safe to use any CSS class name in your project, and never get any side effects. Forget about the evil hacks like using `!important` to override 3rd party CSS specificity.

2. Granular DOM structure. You no longer have to place HTML elements in the specific order to satisfy CSS selectors like `input ~ label` - these are now implementation detail. The resulting markup is cleaner, easier to read and maintain.

3. Flexible theming API: custom CSS properties and `calc()` allow to dynamically change colors at any part of the cascade, and make it possible to auto-adjust level of contrast for elements like buttons and checkboxes.

The mission of Aybolit is to let developers stop reinventing the wheel, and ensure a painless developer experience. Aybolit starts with the basics and provides a few primitive UI components, laying the groundwork for a lot more in future.

## Project Structure

Aybolit project is a monorepo and contains the following npm packages:

- [`@aybolit/core`](https://github.com/web-padawan/aybolit/tree/master/packages/core) - components base classes with "normalized" styles.

Check the README of each individual package for more details.

## Supported Browsers

Chrome, Firefox 64+ and Safari 11+ are targeted browsers. They all support Custom Elements,
Shadow DOM, custom CSS properties and ES modules, and do not need any polyfills.

Any up-to-date Chromium-based browsers, like Samsung Internet, Opera, Vivaldi, Brave, Yandex Browser and many others, are supported too. Microsoft Edge will hopefully join this group later this year.

Internet Explorer is not officially supported. It is generally possible to make web components work in IE11 using polyfills and Babel, but certain things will not work as expected to say the least.

## Contact

If you have questions, feedback or anything to share related to the project, feel free to contact me via:

- Twitter [@serhiikulykov](https://twitter.com/serhiikulykov)
- Polymer Project Slack [@web-padawan](https://polymer.slack.com/team/U0XBXC79U/)
- or [submit an issue](https://github.com/web-padawan/aybolit/issues)
