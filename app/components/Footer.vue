<template>
  <UiContainer as="footer" class="border-t py-16 lg:py-24">
    <section class="grid grid-cols-2 gap-8 lg:grid-cols-6">
      <template v-for="n in links" :key="n.title">
        <div>
          <p class="mb-4 text-muted-foreground lg:text-sm">{{ n.title }}</p>
          <ul class="flex flex-col gap-3">
            <li v-for="(k, j) in n.links" :key="k.title + j">
              <NuxtLink class="font-semibold hover:text-primary" to="#">{{ k.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </template>
    </section>

    <section class="mt-12 flex flex-col justify-between gap-5 border-t pt-8 lg:mt-16 lg:flex-row">
      <NuxtLink to="#" class="flex items-center gap-3">
        <ClientOnly>
          <template #fallback>
            <UiAvatar class="size-8" :alt="`${SITE_NAME} placeholder Logo`" />
          </template>
          <UiAvatar
            :src="isDark ? '/logo-white.png' : '/logo-black.png'"
            :alt="`${SITE_NAME} Logo`"
            :title="`${SITE_NAME} Logo`"
            class="h-8 object-contain"
          />
        </ClientOnly>
        <span class="text-lg font-semibold">{{ SITE_NAME }}</span>
      </NuxtLink>
      <p class="text-muted-foreground">
        &copy; {{ new Date().getFullYear() }} {{ SITE_NAME }}. {{ useT("allRightsReserved") }}.
      </p>
    </section>
  </UiContainer>
</template>

<script lang="ts" setup>
  const colorMode = useColorMode();
  const isDark = computed(() => colorMode.value === "dark");

  const links = [
    {
      title: "Products",
      links: [
        { title: "Overview", to: "/products/overview" },
        { title: "Features", to: "/products/features" },
        { title: "Pricing", to: "/products/pricing" },
        { title: "Integrations", to: "/products/integrations" },
        { title: "Demo", to: "/products/demo" },
        { title: "FAQs", to: "/products/faqs" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { title: "For Startups", to: "/solutions/startups" },
        { title: "For Enterprises", to: "/solutions/enterprises" },
        { title: "For SMBs", to: "/solutions/smbs" },
        { title: "For Healthcare", to: "/solutions/healthcare" },
        { title: "For Education", to: "/solutions/education" },
        { title: "For Finance", to: "/solutions/finance" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Blog", to: "/resources/blog" },
        { title: "Case Studies", to: "/resources/case-studies" },
        { title: "Ebooks", to: "/resources/ebooks" },
        { title: "Webinars", to: "/resources/webinars" },
        { title: "Whitepapers", to: "/resources/whitepapers" },
        { title: "Help Center", to: "/resources/help-center" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About Us", to: "/company/about" },
        { title: "Our Team", to: "/company/team" },
        { title: "Careers", to: "/company/careers" },
        { title: "Press", to: "/company/press" },
        { title: "Contact Us", to: "/company/contact" },
        { title: "Privacy Policy", to: "/company/privacy-policy" },
      ],
    },
    {
      title: "Support",
      links: [
        { title: "Help Center", to: "/support/help-center" },
        { title: "Documentation", to: "/support/documentation" },
        { title: "Community", to: "/support/community" },
        { title: "API Status", to: "/support/api-status" },
        { title: "Live Chat", to: "/support/live-chat" },
        { title: "Support Tickets", to: "/support/tickets" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Terms of Service", to: "/legal/terms" },
        { title: "Privacy Policy", to: "/legal/privacy" },
        { title: "Cookie Policy", to: "/legal/cookie" },
        { title: "Data Protection", to: "/legal/data-protection" },
        { title: "Compliance", to: "/legal/compliance" },
        { title: "Accessibility", to: "/legal/accessibility" },
      ],
    },
  ];
</script>
