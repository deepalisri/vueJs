import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';
import {CacheFirst, NetworkFirst} from 'workbox-strategies';
/* eslint-disable no-undef */

  // eslint-disable-next-line no-restricted-globals,no-underscore-dangle
new precacheAndRoute(self.__WB_MANIFEST);

  // java-script files cache
  registerRoute(
    new RegExp('.+\\.js$'),
    new StaleWhileRevalidate({
      cacheName: 'js-cache',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 20,
          maxAgeSeconds: 60 * 60 * 24 * 7,
          purgeOnQuotaError: true,
        }),
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // css files cache
  registerRoute(
    new RegExp('.+\\.css$'),
    new StaleWhileRevalidate({
      cacheName: 'css-cache',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 5,
          maxAgeSeconds: 60 * 60 * 24 * 7,
          purgeOnQuotaError: true,
        }),
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // image files cache
  registerRoute(
    new RegExp('.+\\.(png|jpg|jpeg|svg)$'),
    new CacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new ExpirationPlugin({
          maxEntries: 20,
          maxAgeSeconds: 60 * 60 * 24 * 7,
          purgeOnQuotaError: true,
        }),
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  registerRoute(
    new RegExp('/.*'),
    new NetworkFirst({}),
    'GET',
  );

  // self.addEventListener('fetch', event => {
  //   console.log('Fetch event for ', event.request.url);
  //   event.respondWith(
  //     caches.match(event.request)
  //     .then(response => {
  //       if (response) {
  //         console.log('Found ', event.request.url, ' in cache');
  //         return response;
  //       }
  //       console.log('Network request for ', event.request.url);
  //       return fetch(event.request)
  
  //       // TODO 4 - Add fetched files to the cache
  
  //     }).catch(error => {
  //         console.log(error)
  
  //       // TODO 6 - Respond with custom offline page
  
  //     })
  //   );
  // });
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
/* eslint-enable no-undef */