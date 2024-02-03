import { writable, derived } from "svelte/store";

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

const locales = {
  en: en,
  ja: ja,
};

export const lang = writable("en");

export const t = derived(
  lang,
  ($lang: keyof typeof locales) =>
    (msg) => {
      return locales[$lang][msg];
    },
);
