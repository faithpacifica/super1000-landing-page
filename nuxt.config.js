

export default {

  server: {
    port: 3005, // default: 3005
    host: '0.0.0.0', // default: localhost
  },
  ssr: false,
  head: {
    title: 'super 1000',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },


  css: ['@/assets/style/style.scss'],


  plugins: [
    {
      src: "~/plugins/vue-slick-carousel.js",
    },
    {
      src: "~/plugins/VueNumber.js",
      ssr: false,
    },
    {
      src: "~/plugins/moment.js",
    },
    // {src: '~/plugins/chart.js', mode: 'client'}
  ],

  components: true,


  buildModules: [
    // '@nuxtjs/color-mode',
    [
      '@nuxtjs/eslint-module',
    ],

    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],


  modules: [
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'ru',
            file: 'ru.js',
          },
          {
            code: 'uz',
            file: 'uz.js',
          },
          {
            code: 'en',
            file: 'en.js',
          },
        ],
        strategy: 'prefix_and_default',
        defaultLocale: 'uz',
        detectBrowserLanguage: false,
        lazy: true,
        vueI18nLoader: true,
        langDir: 'languages/',
      },
    ],
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://jsonplaceholder.typicode.com/',
  },

  build: {},
}
