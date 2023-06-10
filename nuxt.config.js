export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Live Cricket Score 🏏',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge, chrome=1'
      },
      {
        name: 'HandheldFriendly',
        content: 'True'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Get Real-time Live Cricket Score Update without refreshing the page.' },
      {
        name: 'referrer',
        content: 'no-referrer-when-downgrade'
      },
      {
        name: 'theme-color',
        content: '#38ada9'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'application-name',
        content: 'Live Score'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'white-translucent'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Live Score'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://score.mskian.com/media/random-score.jpg'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Live Cricket Score 🏏'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Get Real-time Live Cricket Score Update without refreshing the page.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://score.mskian.com/media/random-score.jpg'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://score.mskian.com/'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@santhoshveerece'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@santhoshveerece'
      },
      {
        hid: 'twitter:label1',
        name: 'twitter:label1',
        content: 'Written by'
      },
      {
        hid: 'twitter:data1',
        name: 'twitter:data1',
        content: '@santhoshveerece'
      }
    ],
    link: [
      {
        rel: 'shortcut icon',
        href: '/icons/Icon-32.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '48x48',
        href: '/icons/Icon-48.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/icons/Icon-72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '96x96',
        href: '/icons/Icon-96.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/icons/Icon-144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: '/icons/Icon-192.png'
      },
      {
      rel: 'apple-touch-icon',
      sizes: '512x512',
      href: '/icons/Icon-512.png'
      },
      {
        rel: 'manifest',
        href: '/manifest.json'
      },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://cricket-api.vercel.app' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'Live Cricket Score 🏏',
        href: 'https://score.mskian.com/feed.xml'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@type': 'Website',
          publisher: {
            '@type': 'Organization',
            name: 'Live Cricket Score 🏏',
            url: 'https://score.mskian.com/',
            logo: {
              '@type': 'ImageObject',
              url: 'https://score.mskian.com/icons/Icon-72.png',
              width: 72,
              height: 72
            }
          },
          url: 'https://score.mskian.com/',
          image: {
            '@type': 'ImageObject',
            url: 'https://score.mskian.com/media/random-score.jpg',
            width: 1200,
            height: 630
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://score.mskian.com/'
          },
          description: 'Get Real-time Live Cricket Score Update without refreshing the page.'
        }
      }
    ]
  },
  loading: { color: '#e84b0d' },
  generate: { fallback: '404.html' },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
    '@nuxtjs/feed'
  ],
  sitemap: {
    hostname: 'https://score.mskian.com',
    gzip: true,
    exclude: ['/404'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  feed: [
    {
      path: '/feed.xml',
      create (feed) {
        feed.options = {
          title: 'Live Cricket Score 🏏',
          link: 'https://score.mskian.com/',
          description: 'Get Real-time Live Cricket Score Update without refreshing the page.'
        }
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    }
  ],
  /*
   ** Add overriding info for meta items
   */
  meta: {
    name: 'Live Cricket Score 🏏', // this is needed to change title for all PWA meta tags
    description: 'Get Real-time Live Cricket Score Update without refreshing the page.' // this is needed to change title for all PWA meta tags
  },
  manifest: {
    name: 'Live Score',
    short_name: 'Live Score',
    description: 'Get Real-time Live Cricket Score Update without refreshing the page.',
    icons: [
      {
        src: '/icons/Icon-48.png',
        sizes: '48x48',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    orientation: 'any'
  },
  pwa: {
    icon: false,
    manifest: false
  },
  workbox: {
    dev: false,
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  // build: {
  //  postcss: {
  //    preset: {
  //      features: {
  //        customProperties: false
  //      }
  //    }
  //  }
  // }
  env: {
    API_URL: process.env.URL || 'https://cricketapi-1-q7206325.deta.app/score?id=',
    LIVE_URL: process.env.ID
  },
}
