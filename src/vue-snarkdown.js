import { h } from 'vue'
import snarkdown from 'snarkdown'

export default {
  name: 'VueSnarkdown',
  props: {
    markdown: {
      type: String,
    },
  },
  computed: {
    html() {
      const md = this.markdown || this.slotMarkdown || ''
      return snarkdown(md)
    },

    slotMarkdown() {
      let slotContents = this.$slots.default ? this.$slots.default()[0].children : undefined;
      return slotContents || ''
    }
  },
  render() {
    return h('div', { innerHTML: this.html })
  },
}
