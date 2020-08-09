(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('snarkdown')) :
  typeof define === 'function' && define.amd ? define(['exports', 'snarkdown'], factory) :
  (global = global || self, factory(global.VueSnarkdown = {}, global.snarkdown));
}(this, (function (exports, snarkdown) { 'use strict';

  snarkdown = snarkdown && Object.prototype.hasOwnProperty.call(snarkdown, 'default') ? snarkdown['default'] : snarkdown;

  var vueSnarkdown = {
    render: function(createElement) {
      return createElement( 'div', { domProps: { innerHTML: this.html } })
    },
    props: {
      markdown: { type: String },
    },
    computed: {
      html: function html() {
        var md = this.markdown || this.slotMarkdown || '';
        return snarkdown(md)
      },
      slotMarkdown: function slotMarkdown() {
        return this.$slots.default && this.$slots.default[0].text
      }
    },
  };

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;
    Vue.component('VueSnarkdown', vueSnarkdown);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  exports.default = vueSnarkdown;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
