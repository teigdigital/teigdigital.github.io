export default {
  head: {
    title:  'Teig Digital',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Teig Digital AS' }
    ],
    link: [
      { href: 'https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre:400,900|Josefin+Sans|Lato', rel: 'stylesheet' },
      { href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', rel: 'stylesheet' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
      scss: [
          'assets/css/_variables.scss',
      ]
  },
  router: {
    middleware: 'pages'
  }
} 