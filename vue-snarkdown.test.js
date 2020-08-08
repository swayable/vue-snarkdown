const Vue = require('vue/dist/vue')
const VueSnarkdown = require('./src/vue-snarkdown.js')
Vue.component('Snarkdown', VueSnarkdown);

describe('VueSnarkdown', () => {
  const markdown = '_this_ is **easy** to `use`.'
  const expectedHtml = '<em>this</em> is <strong>easy</strong> to <code>use</code>.'

  describe('using markdown prop', () => {
    it('renders markdown', () => {
      const vm = new Vue({
        template: `<Snarkdown markdown='${markdown}' />`,
      }).$mount()
      expect(vm.$el.innerHTML).toBe(expectedHtml)
    })
  })

  describe('using the default slot', () => {
    it('renders markdown', () => {
      const vm = new Vue({
        template: `<Snarkdown>${markdown}</Snarkdown>`,
      }).$mount()
      expect(vm.$el.innerHTML).toBe(expectedHtml)
    })
  })
})