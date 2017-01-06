# Flexlay

Flexlay is a CSS-only library to simplify common use cases regarding CSS Flexbox properties. Heavily inspired by [Angular Material 1 Layout System](https://material.angularjs.org/latest/layout/introduction), flexlay allows you to setup flexbox layouts through simple attributes in your HTML.

## Usage

* NPM: `npm install flexlay --save`
* CDN: `https://unpkg.com/flexlay@latest/dist/flexlay.min.css`

## Layout Model

The easiest way to use this library is to think in the layout model it provides (powered by flex of course), based on 3 core concepts:
 * Define row or column layouts (provided by `fl-layout`)
 * Define layout alignment of its childs (provided by `fl-layout-align`)
 * Define flex behaviour of the childs (provided by `fl-flex`)
 
*Thorough documentation will be available in the short future. Use the Material system as a temporary reference.*
 
## Responsive support

All attribute selectors have responsive support, initially following [Material Design Breakpoints](https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints):
* Add a `-<breakpoint name>` suffix to rules you only want targeting a specific screen size
* Add a `-gt-<breakpoint name>` suffix to rules you want targeting screen sizes greater than a specific breakpoint.

Most work is laid out to support custom breakpoints but is yet to be finished. It needs enough support requests to be actually implemented.

## Developer Notes

**Contributors are welcome!** I started out this library out of need to use the Material Layout outside Angular 1, and I ended up using it in all my projects now. I want you to find the value it provides as I do, and contribute to make it better.

The project is sourced in SCSS and commented enough to understand how it works. Open a PR or Issue to help or ask how things work.

## Developer Roadmap

* Create documentation website
* Expose bower and more CDN's
* Expose rules also as SCSS mixins
* Expose entire project as a configurable SCSS mixin
