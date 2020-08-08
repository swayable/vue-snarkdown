const snarkdown = require('snarkdown')

module.exports = {
  template: "<div v-html='html' />",
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
