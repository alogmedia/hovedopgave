import { defineNuxtPlugin } from "#app";
import { ref } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  const previousRoute = ref(null);

  const router = nuxtApp.$router;

  router.beforeEach((to, from, next) => {
    if (from.fullPath) {
      previousRoute.value = from.fullPath;
    }
    next();
  });

  nuxtApp.provide("previousRoute", previousRoute);
});
