<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton size="icon-sm" variant="outline">
        <Icon name="lucide:languages" class="size-5" />
      </UiButton>
    </UiDropdownMenuTrigger>

    <UiDropdownMenuContent class="w-44" align="end" :side-offset="10">
      <UiDropdownMenuLabel :label="useT('chooseLanguage')" />
      <UiDropdownMenuSeparator />
      <UiDropdownMenuRadioGroup :model-value="locale">
        <UiDropdownMenuRadioItem
          v-for="item in locales"
          :key="item.code"
          :value="item.code"
          :text-value="item.name"
          :title="item.name"
          @select="navigateTo(switchLocalePath(item.code))"
        />
      </UiDropdownMenuRadioGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

<script lang="ts" setup>
  const { locales, locale } = useI18n();
  const switchLocalePath = useSwitchLocalePath();
</script>
