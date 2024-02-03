import { writable, derived } from "svelte/store";

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

const locales = {
  en: en,
  ja: ja,
};
type locales = keyof typeof locales;

export const lang = writable<keyof locales>("en");

export const t = derived(
  lang,
  ($lang: locales) =>
    (msg: keyof locales[typeof $lang]) => {
      return locales[$lang][msg];
    },
);
