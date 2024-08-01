<template>
  <UiContainer class="border-y py-16 xl:py-24">
    <p class="home__companies mb-4 text-pretty text-center text-muted-foreground lg:mb-8">
      {{ useT("homeCompanies") }}
    </p>
    <div class="home__companies">
      <NuxtMarquee
        pause-on-hover
        :speed="30"
        :gradient-width="100"
        gradient
        auto-fill
        gradient-color="hsl(var(--background))"
      >
        <Icon
          v-for="l in [
            'logos:algolia',
            'logos:airbnb',
            'logos:angular',
            'logos:appwrite',
            'logos:azure',
          ]"
          :key="l"
          :name="l"
          class="mr-10 size-32"
        />
      </NuxtMarquee>
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
  onMounted(() => {
    useGsap.from(".home__companies", {
      y: 50,
      delay: 0.2,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".home__companies",
        toggleActions: "play none none reset",
      },
    });
  });
</script>
