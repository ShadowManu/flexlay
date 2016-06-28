# Flexlay

Flexlay is a CSS-only library aiming to build on the concepts initially defined on Angular Material 1 on how to model
a layout using CSS flexbox, being both capable of standalone use apart from Angular, or as a CSS core foundation for
a Angular 2 Module.

This project is still a proof of concept and has just started development. If you're horribly missing Material Layout
on Angular2, want a CSS-flexbox library more comprehensive than flexboxgrid, just wants to contribute to open source
but are scared of huge projects with so many files, I am really open for you to help out on this project. Help me
make the best out of this idea.

## Usage

After doing an `npm install flexlay`, you can do `<link rel="stylesheet" href="./node_modules/flexlay/dist/flexlay.css"`
in your HTML.

## Project Status

The initial workload of copying/translating/improving the layout system sources fron Angular Material 1 has been
done, at least to a rough 85%. The `npm` deployment has been recently set up and released version `0.2.1`. It's then
publicly available to all brave users who would like to go on a wonderful flexbox journey. Check the roadmap to see
what's going on. Changes are stable enough to be used in one of my projects and feature completion will be based on
personal requirements and community initiative.

## Documentation
*Nice, you've charmed me with your sweet words, but how the hell do I use this?*

I'm sorry, documentation is lower in the roadmap. However, be safe that there a really great kind of mirror
documentation that works perfect: [The Angular Material 1 Layout System](https://material.angularjs.org/1.0.5/layout/introduction).
I religiously follow all rules there, with the usage being the same, except for a couple of caveats simple to follow:

1. All attributes possess a `fl-` prefix to avoid naming collisions. For example, instead of using `flex-sm="33"`, you
must use `fl-flex-sm="33"`.
2. When using `layout-align` you must set both axis e.g. `layout-align="end stretch"`. Using only one will have
unexpected results.`

## What is implemented
* Parent properties: `layout`, `layout-align`
* Child properties: `flex`, `flex-order`, `flex-offset`
* All implemented accepting breakpoint modifiers

## What is missing (IRRC)
* Parent properties: `layout-wrap`, `layout-padding`, `layout-margin`, `layout-fill`
* Show/Hide properties: `show`, `hide`

## Roadmap

This is the original sketch (and its status) of the steps planned at the startup of the project.

- [X] Setup a node-sass buildchain (I'll use NPM because reasons)
- [X] Initial styles based on Angular Material
- [X] Setup NPM deployment
- [ ] Setup tests (what kind? Im not CSS Test Expert. At most, I know linting)
- [ ] Setup documentation (readme.md style? gh-pages style? what can make this easier?)
- [ ] Define serious conceptual documents for things missing, mental models that needs refinement, etc. Part of docs.
- [ ] Whatever the community ends up really asking of this
