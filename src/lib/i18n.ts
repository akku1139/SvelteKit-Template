import { writable, derived } from "svelte/store";

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

const locales = {
  en: en,
  ja: ja,
};
type langs = keyof typeof locales;

export const lang = writable<langs>("en");

export const t = derived(
  lang,
  ($lang) =>
    (msg: keyof typeof locales[langs]) =>
      locales[$lang][msg],
);
