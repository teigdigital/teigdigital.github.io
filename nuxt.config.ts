// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        head: {
            title: 'Teig Digital AS',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { href: 'https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre:400,900|Josefin+Sans|Lato', rel: 'stylesheet' },
                { href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', rel: 'stylesheet' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/css/_variables.scss" as *;'
                }
            }
        }
    }
})
