const CACHE = 'vault-shell-v23';
const SHELL = [
  './', './index.html', './library.html', './login.html', './my-vault.html', './pricing.html', './about.html', './how.html', './updates.html', './checkout.html',
  './supabase-config.js', './vault-auth.js', './vault-library-data.js', './pwa.js', './manifest.webmanifest',
  './assets/app-icon-192.png', './assets/app-icon-512.png', './assets/favicon-64.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Never intercept auth/API calls.
  if (url.hostname.includes('supabase.co') || url.pathname.startsWith('/auth/')) return;
  if (url.hostname !== self.location.hostname) return;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(req).then(cached => {
    const network = fetch(req).then(res => { const copy=res.clone(); caches.open(CACHE).then(c=>c.put(req,copy)); return res; }).catch(()=>cached);
    return cached || network;
  }));
});
