const snarkdown = require('snarkdown')

module.exports = {
  render: function(createElement) {
    return createElement( 'div', { domProps: { innerHTML: this.html } })
  },
  props: {
    markdown: { type: String },
  },
  computed: {
    html() {
      const md = this.markdown || this.slotMarkdown || ''
      return snarkdown(md)
    },
    slotMarkdown() {
      return this.$slots.default && this.$slots.default[0].text
    }
  },
}
