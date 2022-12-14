export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'tr'
    },
    title: 'Mutfak Yapım Dijital Reklam Ajansı | Sosyal Medya Yönetim Platformu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mutfak Yapım Dijital Reklam Ajansı Sosyal Medya Yönetim Platformu' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost,
    timing: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vee-validate"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:5000',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'tr'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add exception
  transpile: [
    "vee-validate/dist/rules"
  ],
  /*
    ** You can extend webpack config here
    */
  extend(config, ctx) {
    // ...
  }
  },

  loading: '~/components/admin/LoadingBar.vue',

  auth: {
    redirect: false,
    strategies: {
      local: {
        //scheme: "refresh",
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer"
        },
        user: {
          property: "user",
          autoFetch: true
        },
        /*refreshToken:{
          property: "refresh_token",
          data: "refresh_token"
        },*/
        endpoints: {
          login: {
            url: "/api/auth/login", method: "post"
          },
          /*refresh: {
            url: "/api/auth/refresh-token", method: "post"
          },*/
          logout: false,
          user: {
            url: "/api/auth/user", method: "get"
          }
        },
        
      }
    }
  }
}
