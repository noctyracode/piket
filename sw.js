self.addEventListener("install", (event) => {
  self.skipWaiting(); // langsung aktif
});

self.addEventListener("activate", (event) => {
  clients.claim();
});
