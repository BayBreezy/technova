<template>
  <UiContainer class="py-16 xl:py-24">
    <div class="home__hero text-center">
      <UiBadge class="mx-auto py-1 text-base font-normal" variant="outline">
        <div class="flex items-center gap-2">
          <span class="size-3 rounded-full bg-sky-500" />
          <p>{{ useT("homeHero.featuresBadge") }}</p>
          <Icon name="lucide:arrow-right" class="size-4" />
        </div>
      </UiBadge>
    </div>

    <h1
      class="home__hero mx-auto mt-10 max-w-4xl text-pretty text-center text-4xl font-semibold leading-tight tracking-tight lg:text-6xl lg:leading-snug"
    >
      {{ useT("homeHero.title") }}
    </h1>
    <p class="home__hero mt-5 text-pretty text-center text-2xl text-muted-foreground lg:text-2xl">
      {{ useT("homeHero.subtitle") }}
    </p>
    <div class="home__hero mx-auto mt-8 grid grid-cols-1 gap-4 sm:max-w-sm sm:grid-cols-2">
      <UiButton class="h-12 text-base font-semibold" size="lg">{{
        useT("homeHero.cta.getStarted")
      }}</UiButton>
      <UiButton class="h-12 text-base font-semibold" variant="outline" size="lg">{{
        useT("homeHero.cta.learnMore")
      }}</UiButton>
    </div>
    <div
      class="home__hero relative mt-4 block scale-[0.8] overflow-hidden rounded-lg p-px [perspective:1000px] [transform:rotateX(20deg)] lg:mt-12 lg:rounded-2xl"
    >
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img
        ref="image"
        src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        :alt="`${SITE_NAME} home page hero image`"
        loading="eager"
        class="h-[400px] w-full rounded-lg object-cover shadow-lg lg:h-[650px] lg:rounded-2xl"
      />
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
  const image = ref<HTMLImageElement | null>(null);

  onMounted(() => {
    useGsap.from(".home__hero", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
    });
    useGsap.fromTo(
      image.value,
      {
        scale: 0.8,
        rotateX: 20,
      },
      {
        scale: 1,
        rotateX: 0,
        scrollTrigger: {
          trigger: image.value,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  });
</script>
