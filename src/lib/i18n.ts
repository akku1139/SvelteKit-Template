import { writable, derived, get } from "svelte/store";

export const lang = writable("en");

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

const locales = {
  en: en,
  ja: ja,
};

export const t = derived(
  lang,
  () => (msg) => {
    //return locales[$lang][msg];
    return locales[get(lang)][msg];
  }
)
