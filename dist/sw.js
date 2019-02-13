importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/076a472eca493eb64bac.js",
    "revision": "68fc1ff729c685ee47d4f31ea97b0b80"
  },
  {
    "url": "/_nuxt/3ba3dd73e004feaf7ceb.js",
    "revision": "695c645b34d881391215da216337bd43"
  },
  {
    "url": "/_nuxt/bcf682863bd0bf69ee86.js",
    "revision": "0bac7262dd8f32414ff008bd36480a01"
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
