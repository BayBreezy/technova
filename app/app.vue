<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <ConfigProvider :use-id="useIdFunction">
      <NuxtPwaManifest />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <UiVueSonner />
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
  import { ConfigProvider } from "radix-vue";

  const useIdFunction = () => useId();
  const { initialize } = useHotjar();

  onMounted(() => {
    initialize();
  });

  useHead({
    htmlAttrs: { lang: "en" },
    link: [{ rel: "icon", type: "image/png", href: "/logo-black.png" }],
  });
</script>
