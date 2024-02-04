import { writable, derived } from "svelte/store";

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

const locales = {
  en: en,
  ja: ja,
};

export const lang = writable("en");

type langs = keyof typeof locales;

export const t = derived(
  lang,
  ($lang) =>
    (msg: keyof typeof locales[langs]) =>
      locales[$lang][msg],
);
