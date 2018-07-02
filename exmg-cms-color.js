import '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/custom-style.js';
const documentContainer = document.createElement('div');
documentContainer.setAttribute('style', 'display: none;');

documentContainer.innerHTML = `<custom-style>
  <style is="custom-style">
    html {

      --paper-em-50: #e2e4ea;
      --paper-em-100: #b6bccc;
      --paper-em-200: #858faa;
      --paper-em-300: #546287;
      --paper-em-400: #30416e;
      --paper-em-500: #0b1f54;
      --paper-em-600: #0a1b4d;
      --paper-em-700: #081743;
      --paper-em-800: #06123a;
      --paper-em-900: #030a29;
      --paper-em-a100: #6375ff;
      --paper-em-a200: #3047ff;
      --paper-em-a400: #001cfc;
      --paper-em-a700: #0019e3;

      --paper-ems-50: #ebf9e1;
      --paper-ems-100: #cdefb5;
      --paper-ems-200: #abe584;
      --paper-ems-300: #89db52;
      --paper-ems-400: #70d32d;
      --paper-ems-500: #57cb08;
      --paper-ems-600: #4fc607;
      --paper-ems-700: #46be06;
      --paper-ems-800: #3cb804;
      --paper-ems-900: #2cac02;
      --paper-ems-a100: #ddffd5;
      --paper-ems-a200: #b3ffa2;
      --paper-ems-a400: #89ff6f;
      --paper-ems-a700: #74ff56;

    }
  </style>
</custom-style>`;

document.head.appendChild(documentContainer);