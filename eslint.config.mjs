import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off', // allow console.log in TypeScript files
    },
  },
  // {
  //   ...
  // }
)
