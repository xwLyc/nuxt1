importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/28f0102827efaab8193f.js",
    "revision": "5feb8d9a0afa86b50d07a9d8d069b357"
  },
  {
    "url": "/_nuxt/67d3bee7a83a0728d9c5.js",
    "revision": "5056d07ab26af38b2ef32e9be9ce6357"
  },
  {
    "url": "/_nuxt/a650b2d7d2a2d2d671c6.js",
    "revision": "dbd33ae68b25ea96d8c2dbf7f23421f4"
  },
  {
    "url": "/_nuxt/d62dc9f6d49e6e2d8088.js",
    "revision": "737da83d92c42fb8110a077ca74b3739"
  },
  {
    "url": "/_nuxt/ed4b6bd9e1f1e3e37f11.js",
    "revision": "73152c87938c9948fcf4bb2da0144a74"
  }
], {
  "cacheId": "nuxt1",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
