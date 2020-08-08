<h1 align="center">
  Vue Snarkdown
</h1>

Single dependency Vue component wrapping the tiny Markdown parser [Snarkdown](https://github.com/developit/snarkdown)

## Installation
`npm install @swayable/vue-snarkdown`

## Usage

_this_ is **easy** to `use`.

```html
<template>
  <Snarkdown>
    _this_ is **easy** to `use`.
  </Snarkdown>
</template>

<script>
import Snarkdown from '@swayable/vue-snarkdown'

export default {
  components: {
    Snarkdown,
  },
}
</script>
```

## Reactivity
If markdown will change during your component's lifespan,
you must use the `markdown` prop instead of the default slot.

This is because `$slots` [is not reactive](https://github.com/vuejs/vue/issues/3517).

```html
<Snarkdown markdown='_this_ is **easy** to `use`.'>
```

## License

MIT
