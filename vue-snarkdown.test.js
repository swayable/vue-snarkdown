import { mount } from '@vue/test-utils'
import VueSnarkdown from './src/vue-snarkdown.js'
import { describe, it, expect} from 'vitest'

describe('VueSnarkdown', () => {
  const markdown = '_this_ is **easy** to `use`.'
  const expectedHtml = '<em>this</em> is <strong>easy</strong> to <code>use</code>.'

  describe('using markdown prop', () => {
    it('renders markdown', () => {
      const wrapper = mount(VueSnarkdown, {
        props: {
          markdown,
        },
      })
      expect(wrapper.html()).toContain(expectedHtml)
    })
  })

  describe('using the default slot', () => {
    it('renders markdown', () => {
      const wrapper = mount(VueSnarkdown, {
        slots: {
          default: markdown,
        },
      })
      expect(wrapper.html()).toContain(expectedHtml)
    })
  })
})
