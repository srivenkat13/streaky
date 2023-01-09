self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static"),
    then((cache) => {
      return cache.addAll([
        "./",
        "./src/style.css",
        "./src/app.js",
        "./images/fire48.png",
        "./images/fire192.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
