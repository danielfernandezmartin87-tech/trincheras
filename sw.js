// La web ya no lleva el juego. Quien lo instaló desde aquí tiene un trabajador de servicio anterior con todo guardado:
// al ver que este archivo ha cambiado, el navegador instala este, que borra lo guardado, se da de baja y recarga
// las ventanas abiertas, que pasan a mostrar la página de presentación.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
