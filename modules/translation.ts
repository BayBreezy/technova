import { defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  meta: { name: "Reload Translations" },
  async setup(_, nuxt) {
    // restart the dev server when the files in the locales directory change
    nuxt.hook("builder:watch", (ev, path) => {
      if (path.includes("locales/translations")) {
        nuxt.callHook("restart");
      }
    });
  },
});
