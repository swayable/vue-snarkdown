// Import vue component
import vueSnarkdown from './vue-snarkdown.js';

// Declare install function executed by app.use()
export function install(app) {
  if (install.installed) return;
  install.installed = true;
  app.component('VueSnarkdown', vueSnarkdown);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Export the plugin
export default plugin;

// Export the component itself for direct import
export { vueSnarkdown };
