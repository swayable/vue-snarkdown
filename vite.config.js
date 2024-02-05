import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // Specify the output directory and formats if necessary
    lib: {
      entry: 'src/vue-snarkdown.js',
      name: 'Vue Snarkdown',
      fileName: (format) => `vue-snarkdown.${format}.js`
    },
    rollupOptions: {
      // Externalize Vue to avoid bundling it
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
