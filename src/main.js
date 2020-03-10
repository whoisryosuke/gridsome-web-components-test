// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import {
  applyPolyfills,
  defineCustomElements
} from "sui-web-components/loader";

export default function(Vue, { router, head, isClient }) {
  // Tell Vue to ignore all components defined in the test-components
  // package. The regex assumes all components names are prefixed
  // 'test'
  Vue.config.ignoredElements = [/sui-\w*/];

  // Bind the custom elements to the window object
  applyPolyfills().then(() => {
    defineCustomElements(window);
  });
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
