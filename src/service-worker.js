import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import {registerRoute} from 'workbox-routing';
import {StaleWhileRevalidate} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';
import {CacheFirst} from 'workbox-strategies';
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
    new RegExp('https://jsonplaceholder.typicode.com/'),
    new CacheFirst({
      cacheName: 'api-caches'
    })
  );

  self.addEventListener('fetch', function() {})
/* eslint-enable no-undef */