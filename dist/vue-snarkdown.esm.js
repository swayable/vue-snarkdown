import snarkdown from 'snarkdown';

var vueSnarkdown = {
  template: "<div v-html='html' />",
  name: 'Snarkdown',
  global: true,
  props: {
    markdown: { type: String },
  },
  computed: {
    html: function html() {
      return snarkdown(this.markdown || '')
    },
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

export default vueSnarkdown;
export { install };
