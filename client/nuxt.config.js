export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBI7nHTs6MZRaqVIaB93NW7txq_m4jvgss",
          authDomain: "leafy-ether-346913.firebaseapp.com",
          projectId: "leafy-ether-346913",
          storageBucket: "leafy-ether-346913.appspot.com",
          messagingSenderId: "708461584890",
          appId: "1:708461584890:web:aed7b82a6f572588a04443",
          measurementId: "G-CXET57R36S"

        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  bootstrapVue: {
    icons: true
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
