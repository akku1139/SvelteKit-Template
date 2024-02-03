import { writable, derived } from "svelte/store";
import { langs, type langs } from "../locales/$schema.ts";

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

//await import("../locales/"+lang)

const locales = {
  en: en,
  ja: ja,
};
type locales = keyof typeof locales;

export const lang = writable<langs>("en");

export const t = derived(
  lang,
  ($lang: langs) =>
    (msg: keyof locales[langs]) => {
      return locales[$lang][msg];
    },
);
