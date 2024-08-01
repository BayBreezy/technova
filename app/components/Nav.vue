<template>
  <div ref="headerRef" :style="styles" class="sticky top-0 z-50">
    <UiNavbar>
      <UiContainer class="flex h-16 items-center justify-between">
        <div>
          <NuxtLinkLocale class="flex items-center gap-2.5" to="/">
            <ClientOnly>
              <template #fallback>
                <UiAvatar class="size-8" :alt="`${SITE_NAME} placeholder Logo`" />
              </template>
              <UiAvatar
                :src="isDark ? '/logo-white.png' : '/logo-black.png'"
                :alt="`${SITE_NAME} Logo`"
                :title="`${SITE_NAME} Logo`"
                class="size-8"
              />
            </ClientOnly>
            <span class="text-lg font-semibold">{{ SITE_SHORT_NAME }}</span>
          </NuxtLinkLocale>
        </div>
        <div class="flex items-center gap-3">
          <UiButton size="icon-sm" variant="outline" @click="toggleMode()">
            <Icon name="lucide:sun-medium" class="size-5" />
          </UiButton>
          <LanguageSwitcher />
        </div>
      </UiContainer>
    </UiNavbar>
  </div>
</template>

<script lang="ts" setup>
  import { useFixedHeader } from "vue-use-fixed-header";

  const colorMode = useColorMode();
  const isDark = computed(() => colorMode.value === "dark");
  const toggleMode = () => {
    colorMode.preference = isDark.value ? "light" : "dark";
  };
  const headerRef = ref(null);
  const { styles } = useFixedHeader(headerRef);
</script>
