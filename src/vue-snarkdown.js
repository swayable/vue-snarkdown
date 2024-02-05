import { h } from 'vue'
import snarkdown from 'snarkdown'

export default {
  name: 'VueSnarkdown',
  props: {
    markdown: {
      type: String,
      required: true,
    },
  },
  computed: {
    html() {
      const md = this.markdown || this.slotMarkdown || ''
      return snarkdown(md)
    },

    slotMarkdown() {
      let slotContents = this.$slots.default()?.[0]?.children
      if (!this.markdown && !slotContents) console.warn('No markdown found in default slot. Provide markdown prop or default slot.')
      console.log(slotContents)
      return slotContents || ''
    }
  },
  render() {
    return h('div', { innerHTML: this.html })
  },
}
