const CACHE_NAME = 'quantum-radio-v2';
const APP_SHELL = [
  '/radio/index.html',
  '/radio/scripts.js',
  '/radio/styles.css',
  '/radio/manifest.json',
  '/radio/intro.mp3',
  '/radio/song_titles.json',
  '/radio/ad_titles.json',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(APP_SHELL);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // For audio files and extensive content, we want a Cache First strategy
  // If it's in the cache, use it. If not, fetch it and cache it for next time.
  if (event.request.url.includes('/radio/') || event.request.url.includes('/images/')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response because it's a stream and can only be consumed once
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
  } else {
    // Default fallback for other requests (like external fonts if not caught above)
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});