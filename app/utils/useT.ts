import type enUS from "~/locales/en.json";

/**
 * Used to get the translation of a key
 * This was created so that we get type help from the IDE
 * @param value The key to translate
 */
export const useT = (value: keyof typeof enUS | number) => {
  return useI18n().t(value);
};
