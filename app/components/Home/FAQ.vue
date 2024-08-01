<template>
  <UiContainer class="pb-16">
    <UiContainer class="py-16 text-center lg:py-24">
      <h2 class="home__faqs mb-4 mt-2 text-pretty text-4xl font-bold lg:mb-6 lg:mt-3 lg:text-5xl">
        {{ useT("faq.title") }}
      </h2>

      <p
        class="home__faqs mx-auto max-w-[800px] text-pretty text-lg text-muted-foreground lg:text-xl"
      >
        {{ useT("faq.subtitle") }}
      </p>
    </UiContainer>
    <section class="home__faqs mx-auto max-w-[768px]">
      <UiAccordion :default-value="['1']" type="multiple">
        <template v-for="i in faqs" :key="i.value">
          <UiAccordionItem :value="i.value.toString()">
            <UiAccordionHeader>
              <UiAccordionTrigger class="items-start text-left text-lg">{{
                i.title
              }}</UiAccordionTrigger>
            </UiAccordionHeader>
            <UiAccordionContent>
              <p class="text-base text-muted-foreground">{{ i.content }}</p>
            </UiAccordionContent>
          </UiAccordionItem>
        </template>
      </UiAccordion>
    </section>

    <section
      class="home__faqs mx-auto mt-16 flex flex-col items-center gap-6 rounded-lg bg-muted/50 py-8 text-center dark:bg-muted/20"
    >
      <p class="home__faqs text-lg font-semibold">{{ useT("faq.stillHaveQuestions") }}</p>
      <p class="home__faqs text-muted-foreground">
        {{ useT("faq.stillHaveQuestionsContent") }}
      </p>
      <UiButton class="home__faqs">{{ useT("faq.cta.getInTouch") }}</UiButton>
    </section>
  </UiContainer>
</template>

<script lang="ts" setup>
  const faqs = computed(() => [
    {
      value: 1,
      title: useT("faq.one.title"),
      content: useT("faq.one.content"),
    },
    {
      value: 2,
      title: useT("faq.two.title"),
      content: useT("faq.two.content"),
    },
    {
      value: 3,
      title: useT("faq.three.title"),
      content: useT("faq.three.content"),
    },
    {
      value: 4,
      title: useT("faq.four.title"),
      content: useT("faq.four.content"),
    },
    {
      value: 5,
      title: useT("faq.five.title"),
      content: useT("faq.five.content"),
    },
    {
      value: 6,
      title: useT("faq.six.title"),
      content: useT("faq.six.content"),
    },
  ]);

  onMounted(() => {
    useGsap.from(".home__faqs", {
      y: 50,
      delay: 0.2,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".home__faqs",
        toggleActions: "play none none reset",
      },
    });
  });
</script>
