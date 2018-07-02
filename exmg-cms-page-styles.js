import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-styles/typography.js';
import '@polymer/paper-styles/color.js';
import '@polymer/paper-styles/shadow.js';

const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');

documentContainer.innerHTML = `<dom-module id="exmg-cms-page-styles">
  <template>
    <style>
      :host {
        @apply --paper-font-common-base;
        font-size: 14px;
      }

      [row] {
        box-sizing: border-box;
        margin: 0 auto;
        padding-left: var(--col-padding, 12px);
        padding-right: var(--col-padding, 12px);
        width: 100%;
        @apply --layout;
        @apply --layout-wrap;
      }

      @media (min-width: 576px) {
        [row] {
          max-width: 540px;
        }
      }

      @media (min-width: 768px) {
        [row] {
          max-width: 720px;
        }
      }

      @media (min-width: 992px) {
        [row] {
          max-width: 960px;
        }
      }

      @media (min-width: 1200px) {
        [row] {
          max-width: 1140px;
        }
      }

      [col-3], [col-4], [col-6], [col-8], [col-9], [col-12], [col], [col-auto],
      [col-sm-3], [col-sm-4], [col-sm-6], [col-sm-8], [col-sm-9], [col-sm-12], [col-sm], [col-sm-auto],
      [col-md-3], [col-md-4], [col-md-6], [col-md-8], [col-md-9], [col-md-12], [col-md], [col-md-auto],
      [col-lg-3], [col-lg-4], [col-lg-6], [col-lg-8], [col-lg-9], [col-lg-12], [col-lg], [col-lg-auto],
      [col-xl-3], [col-xl-4], [col-xl-6], [col-xl-8], [col-xl-9], [col-xl-12], [col-xl], [col-xl-auto] {
        position: relative;
        width: 100%;
        min-height: 1px;
        box-sizing: border-box;
        padding: var(--col-padding, 8px);
        background: var(--col-background-color);
        border: 1px solid var(--col-border-color, none);
      }

      [col] {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
      }

      [col-auto] {
        flex: 0 0 auto;
        width: auto;
        max-width: none;
      }

      [col-3] {
        flex: 0 0 25%;
        max-width: 25%;
      }

      [col-4] {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
      }

      [col-6] {
        flex: 0 0 50%;
        max-width: 50%;
      }

      [col-8] {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
      }

      [col-9] {
        flex: 0 0 75%;
        max-width: 75%;
      }

      [col-12] {
        flex: 0 0 100%;
        max-width: 100%;
      }

      @media (min-width: 576px) {
        [col-sm] {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        }
        [col-sm-auto] {
          flex: 0 0 auto;
          width: auto;
          max-width: none;
        }
        [col-sm-3] {
          flex: 0 0 25%;
          max-width: 25%;
        }
        [col-sm-4] {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
        }
        [col-sm-6] {
          flex: 0 0 50%;
          max-width: 50%;
        }
        [col-sm-8] {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
        }
        [col-sm-9] {
          flex: 0 0 75%;
          max-width: 75%;
        }
        [col-sm-12] {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }

      @media (min-width: 768px) {
        [col-md] {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        }
        [col-md-auto] {
          flex: 0 0 auto;
          width: auto;
          max-width: none;
        }
        [col-md-3] {
          flex: 0 0 25%;
          max-width: 25%;
        }
        [col-md-4] {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
        }
        [col-md-6] {
          flex: 0 0 50%;
          max-width: 50%;
        }
        [col-md-8] {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
        }
        [col-md-9] {
          flex: 0 0 75%;
          max-width: 75%;
        }
        [col-md-12] {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }

      @media (min-width: 992px) {
        [col-lg] {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        }
        [col-lg-auto] {
          flex: 0 0 auto;
          width: auto;
          max-width: none;
        }
        [col-lg-3] {
          flex: 0 0 25%;
          max-width: 25%;
        }
        [col-lg-4] {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
        }
        [col-lg-6] {
          flex: 0 0 50%;
          max-width: 50%;
        }
        [col-lg-8] {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
        }
        [col-lg-9] {
          flex: 0 0 75%;
          max-width: 75%;
        }
        [col-lg-12] {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }

      @media (min-width: 1200px) {
        [col-xl] {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        }
        [col-xl-auto] {
          flex: 0 0 auto;
          width: auto;
          max-width: none;
        }
        [col-xl-3] {
          flex: 0 0 25%;
          max-width: 25%;
        }
        [col-xl-4] {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
        }
        [col-xl-6] {
          flex: 0 0 50%;
          max-width: 50%;
        }
        [col-xl-8] {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
        }
        [col-xl-9] {
          flex: 0 0 75%;
          max-width: 75%;
        }
        [col-xl-12] {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }

      .between-cards-margin {
        margin-top: 24px;
      }

      .card {
        height: 204px;
        background: var(--secondary-background-color);
        @apply --shadow-elevation-2dp;
        cursor: pointer;
        padding: 16px 20px 20px 20px;
        box-sizing: border-box;
        @apply --layout-horizontal;
        @apply --layout-justified;
      }

      .card.add {
        background: none;
        @apply --shadow-none;
        border: 1px solid var(--divider-color);
        color: var(--primary-color);
        @apply --layout-center-justified;
        @apply --layout-horizontal;
        @apply --layout-center;
      }

      .card .title {
        color: rgba(0, 0, 0, var(--dark-primary-opacity));
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        word-wrap: break-word;
      }

      .card:hover {
        background: var(--paper-grey-200);
      }

      .card.add:hover {
        background: var(--primary-color);
        color: white;
      }

      .card.add > div {
        @apply --layout-vertical;
        @apply --layout-center;
      }

      .card.add .plus {
        font-size: 40px;
        font-weight: 500;
      }

      .card.add .plus-title {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }

      .page-container {
        @apply --layout-vertical;
      }

      .page-content {
        padding-top: 40px;
        padding-bottom: 48px;
      }

      h2 {
        color: rgba(0, 0, 0, var(--dark-secondary-opacity));
        display: block;
        font-size: 14px;
        line-height: 24px;
        margin-bottom: -8px;
        position: relative;
      }

      .flex {
        @apply --layout-flex;
      }

      exmg-paper-info-card .actions paper-button {
        color: var(--secondary-color);
      }

      exmg-paper-search-header paper-button {
        color: var(--text-primary-color);
        background-color: var(--primary-color);
        margin: 12px 12px;
        height: 32px;
      }

      exmg-paper-toolbar paper-button {
        color: var(--text-primary-color);
        background-color: var(--primary-color);
        margin: 12px 0px;
        height: 32px;
      }

      exmg-paper-card .header paper-button {
        color: var(--text-primary-color);
        background-color: var(--primary-color);
        padding: 8px 20px;
      }

      .tabs-container {
        background: var(--light-primary-color);
      }
      .tabs-container > paper-tabs {
        --paper-tabs-selection-bar-color: var(--secondary-color);
      }
      .tabs-container > paper-tabs {
        background: var(--light-primary-color);
        height: 40px;
        text-transform: uppercase;
        color: white;
      }

      paper-tab {
       padding: 0px 26px;
      }

      .main header .title{
        color: var(--text-primary-color);
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }


      [row] > h2 {
        color: rgba(0, 0, 0, var(--light-secondary-opacity));
        display: block;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
      }

      a {
        color: var(--secondary-text-color);
        text-decoration: underline;
      }
      a.open-new::after {
        font-family: 'Material Icons Extended';
        font-weight: normal;
        font-style: normal;
        font-size: 16px;
        display: inline-block;
        width: 1em;
        height: 1em;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-feature-settings: 'liga';
        text-decoration: none;
        content: "open_in_new";
        margin-left: 4px;
        vertical-align: middle;
      }

      @media (max-width: 400px) {
        .page-content [row] > * {
          margin-bottom: 24px;
        }
      }

      .page-header-bar h2 {
        color: rgba(0,0,0,0.87);
        font-size: 26px;
        font-weight: 500;
        line-height: 32px;
        margin-bottom: 16px;
      }
      .page-header-bar {
        background: var(--secondary-background-color);
        -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.12);
        box-shadow: 0 1px 0 rgba(0,0,0,0.12);
      }
      .page-header-bar .body {
        color: rgba(0,0,0,0.54);
        font-size: 16px;
        line-height: 24px;
      }
      .page-header-bar .body p {
        margin: 0;
      }

      exmg-paper-card {
        width: 100%;
      }

      [hidden]{
        display: none;
      }
      paper-button.alert {
        color: white;
        background:  var(--error-color);
      }

  </style>

</template></dom-module>`;

document.head.appendChild(documentContainer);