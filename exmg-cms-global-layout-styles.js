import '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-styles/typography.js';
import '@polymer/paper-styles/color.js';
import '@polymer/paper-styles/shadow.js';
import './exmg-cms-styles.js';
const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');

documentContainer.innerHTML = `<dom-module id="exmg-cms-global-layout-styles">
  <template>
    <style>

      /* Layout Styles */
      :host {
        @apply --paper-font-common-base;
        @apply --layout-vertical;
        --main-header-height: 48px;

        font-size: 14px;
        background-color: var(--primary-background-color);
        height: 100vh;
      }

      app-header:not([narrow]) app-toolbar > paper-icon-button:first-child {
        display: none;
      }

      .main-header {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        height: var(--main-header-height);
        z-index: 196;
      }

      .main-header a {
        color: var(--text-primary-color);
      }

      .main-header app-toolbar {
        height: var(--main-header-height);
      }

      .main-header img {
        height: 28px;
      }

      .main-header [main-title] {
        @apply --layout-horizontal;
        @apply --layout-center;
      }

      .main-header app-toolbar paper-icon-button {
        width: 48px;
        height: 48px;
      }

      .main-header app-toolbar > paper-icon-button:first-child {
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -24px;
      }

      @media all and (max-width: 767px) {
        .main-header app-toolbar {
          text-align: center;
        }
        .main-header img {
          margin: 0 auto;
        }
      }

      .main {
        position: relative;
        height: calc(100vh - var(--main-header-height));
        overflow-y: auto;
      }

      .main > app-toolbar {
        background: var(--light-primary-color);
        color: var(--text-primary-color);
        height: 56px;
      }

      app-drawer-layout {
        min-height: calc(100vh - var(--main-header-height));
        z-index: 195;
        position: relative;
        overflow: hidden;
      }

      app-drawer {
        position: absolute;
      }

      exmg-paper-sidemenu {
        box-sizing: border-box;
        width: 256px;
      }

      exmg-paper-sidemenu[collapsed] {
        width: 64px;
      }

      footer {
        font-weight: 200;
        padding: 16px;
        text-align: center;
      }

  </style>

</template></dom-module>`;

document.head.appendChild(documentContainer);

/*
The `<exmg-cms-global-layout-styles>` element provides a way to style the app global layout and pages in you application. To do this
the html needs to be added this way:

```html
<template>
  <style include="exmg-cms-global-layout-styles"></style>

  <app-header reveals class="main-header" narrow$="[[narrow]]" shadow>
    <app-toolbar>
      <paper-icon-button icon="menu" on-tap="toggleDrawer"></paper-icon-button>
      <img src="logo.svg" alt="Logo">
    </app-toolbar>
  </app-header>

  <app-drawer-layout narrow="{{narrow}}">

    <app-drawer id="drawer" slot="drawer">
      <exmg-paper-sidemenu id="sidemenu" menu="[[menu]]" collapsed="{{collapsed}}" narrow$="[[narrow]]" debug></exmg-paper-sidemenu>
    </app-drawer>

    <div class="main">
      <app-toolbar>
        <span main-title>Page Title</span>
      </app-toolbar>
      <slot></slot>
      <footer>...</footer>
    </div>

  </app-drawer-layout>

</template>
```

Also the global layout mixin needs to be loaded
```js
class XDemo extends Exmg.CmsGlobalLayoutMixin(Polymer.Element) {
  static get is() { return 'x-demo'; }
}
window.customElements.define(XDemo.is, XDemo);
```

Please see the demo pages for a working example
*/

