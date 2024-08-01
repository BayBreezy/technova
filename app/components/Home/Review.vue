<template>
  <div class="home__review__bg bg-muted">
    <UiContainer class="py-16 pt-6">
      <div class="home__review text-center">
        <Icon name="logos:angular" class="size-32" />
      </div>
      <h2
        class="home__review text-pretty text-center text-4xl font-semibold leading-tight tracking-tight lg:text-5xl lg:leading-tight"
      >
        We've been using {{ SITE_SHORT_NAME }} to kick start every new project and can't imagine
        working without them.
      </h2>
      <UiAvatar
        src="https://randomuser.me/api/portraits/med/women/75.jpg"
        class="home__review mx-auto mt-6 size-20"
      />
      <p class="home__review mt-2 text-center text-lg font-bold">Jasmine Jones</p>
      <p class="home__review mt-2 text-center text-muted-foreground">Product Manager, Angular</p>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup>
  onMounted(() => {
    useGsap
      .timeline({
        scrollTrigger: {
          trigger: ".home__review__bg",
          toggleActions: "play none none reset",
        },
      })
      .from(".home__review__bg", {
        opacity: 0,
        scale: 0.9,
      })
      .from(".home__review", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
      });
  });
</script>
