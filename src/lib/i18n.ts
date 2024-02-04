import { writable, derived } from "svelte/store";

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

const locales = {
  en: en,
  ja: ja,
};
//type locales = keyof typeof locales;
/*<locales>*/
export const lang = writable("en");

export const t = derived(
  lang,
  ($lang) =>
    (msg) =>
      locales[$lang][msg],
);
