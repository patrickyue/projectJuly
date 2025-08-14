import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'

const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxthub/core',
    'nuxt-auth-utils',
    'nuxt-security',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error, Vuetify types are not recognized
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      name: '',
      url: '',
    },
    mail: {
      key: '',
      from: '',
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  routeRules: {
    '/api/me': {
      security: {
        rateLimiter: {
          headers: false,
          interval: 60 * 1000,
          tokensPerInterval: 6,
        },
      },
    },
    '/api/_hub/**': {
      csurf: false,
    },
    '/**': {
      security: {
        rateLimiter: false,
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  hub: {
    database: true,
    blob: true,
    kv: true,
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  csurf: {
    methodsToProtect: ['POST', 'PUT', 'PATCH', 'DELETE'],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  security: {
    csrf: true,
    rateLimiter: {
      driver: {
        name: 'cloudflare-kv-binding',
        options: {
          binding: 'KV',
        },
      },
    },
    headers: {
      contentSecurityPolicy: {
        'img-src': ['\'self\'', 'data:', 'https://avatars.githubusercontent.com', 'https://static-cdn.jtvnw.net/'],
        'script-src': ['\'self\'', 'https:', '\'nonce-{{nonce}}\'', '\'strict-dynamic\'', 'https://static.cloudflareinsights.com'],
      },
      crossOriginEmbedderPolicy: isProd ? 'credentialless' : false,
    },
  },
})
