// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/ui',
  ],

  ssr: false, devtools: { enabled: true },

  app: {
    baseURL: '/homepage/',
    head: {
      charset: 'utf-8',
      title: 'リリオのホームページ',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        {
          property: 'og:title',
          content: 'リリオのホームページ',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: '@ririo08',
        },
        {
          property: 'og:image',
          content:
            'https://pbs.twimg.com/profile_images/1121918283446247424/ZRgtg7CP_400x400.png',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@700&display=swap',
          crossorigin: '',
        },
      ],
    },
  },

  css: [],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-27',

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
