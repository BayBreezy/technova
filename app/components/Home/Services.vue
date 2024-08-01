<template>
  <UiContainer class="py-16 xl:py-24">
    <p class="home__services text-pretty text-center font-semibold text-primary">
      {{ useT("services") }}
    </p>
    <h2
      class="home__services mb-4 mt-3 text-pretty text-center text-3xl font-semibold lg:mb-5 lg:text-4xl"
    >
      {{ useT("homeService.title") }}
    </h2>
    <p
      class="home__services mx-auto max-w-[760px] text-pretty text-center text-lg text-muted-foreground lg:text-xl"
    >
      {{ useT("homeService.subtitle") }}
    </p>

    <div
      class="grid grid-cols-1 gap-y-10 py-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:gap-y-16 lg:py-16"
    >
      <template v-for="(f, i) in services" :key="i">
        <div class="home__services group flex flex-col items-center justify-center">
          <div class="flex size-14 items-center justify-center rounded-lg border">
            <Icon
              :name="f.icon"
              class="size-6 transition-colors group-hover:text-primary lg:size-6"
            />
          </div>
          <h3
            class="mt-4 text-pretty text-center text-lg font-semibold lg:mt-5 lg:text-xl"
            v-html="f.title"
          />
          <p
            class="mt-1 max-w-[400px] text-pretty text-center text-muted-foreground lg:mt-2"
            v-html="f.description"
          />
        </div>
      </template>
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
  const services = computed(() => [
    {
      icon: "lucide:users",
      title: useT("services.custom.title"),
      description: useT("services.custom.description"),
    },
    {
      icon: "lucide:settings",
      title: useT("services.strategic.title"),
      description: useT("services.strategic.description"),
    },
    {
      icon: "lucide:file-digit",
      title: useT("services.digital.title"),
      description: useT("services.digital.description"),
    },
    {
      icon: "lucide:cloud-cog",
      title: useT("services.cloud.title"),
      description: useT("services.cloud.description"),
    },
    {
      icon: "lucide:tablet-smartphone",
      title: useT("services.mobile.title"),
      description: useT("services.mobile.description"),
    },
    {
      icon: "lucide:shield-check",
      title: useT("services.cyber.title"),
      description: useT("services.cyber.description"),
    },
  ]);

  onMounted(() => {
    useGsap.from(".home__services", {
      y: 50,
      delay: 0.2,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".home__services",
        toggleActions: "play none none reset",
      },
    });
  });
</script>
