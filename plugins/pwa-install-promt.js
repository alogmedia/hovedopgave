// plugins/pwa-install-prompt.js
export default defineNuxtPlugin((nuxtApp) => {
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    nuxtApp.vueApp.provide("installPrompt", deferredPrompt);
  });
});
