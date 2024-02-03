import { writable, derived } from "svelte/store";

export const lang = writable("en");

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

const locales = {
  en: en,
  ja: ja,
};

export function t(name: string): string {
  return locales[lang][name];
}

export const t = derived(
  lang,
  $lang => {
    (msg) => {
      return locales[$lang][msg];
    }
  }
)
