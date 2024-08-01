<template>
  <div>
    <HomeHero />
    <HomeCompanies />
    <HomeServices />
    <HomeReview />
    <HomeFAQ />
  </div>
</template>

<script lang="ts" setup>
  defineOgImage({ url: "/cover.png" });
  useSeoMeta({
    ogImage: "/cover.png",
    twitterTitle: SITE_NAME,
    twitterDescription: SITE_DESCRIPTION,
    twitterImage: "/cover.png",
    twitterCard: "summary_large_image",
  });
</script>
