<template>
  <span v-html="html"></span>
</template>

<script>
import snarkdown from 'snarkdown'

export default {
  computed: {
    html() {
      return this.$slots.default ? snarkdown(this.$slots.default[0].text) : ''
    },
  },
}
</script>
