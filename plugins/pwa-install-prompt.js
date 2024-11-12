// plugins/pwa-install-prompt.js
import { ref } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    const installPromptRef = ref(null);

    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("beforeinstallprompt event fired"); // Debugging log
      e.preventDefault();
      installPromptRef.value = e; // Update the ref value
      nuxtApp.vueApp.provide("installPrompt", installPromptRef); // Provide as a reactive ref
    });

    console.log("installPromptRef provided:", installPromptRef); // Confirm ref is provided
  }
});
