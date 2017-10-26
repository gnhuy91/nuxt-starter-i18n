module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-starter-i18n',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Plugins
  */
  plugins: [
    '~plugins/i18n',
  ],
  /*
  ** Router configuration
  */
  router: {
    middleware: 'i18n',
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-i18n',
    ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
