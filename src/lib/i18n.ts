import { writable, derived } from "svelte/store";
import type { langs, schema } from "../locales/$schema.ts";

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

const locales: {langs: schema} = {
  en: en,
  ja: ja,
};
type locales = keyof typeof locales;

export const lang = writable<langs>("en");

export const t = derived(
  lang,
  ($lang: langs) =>
    (msg: keyof locales[langs]) =>
      locales[$lang][msg]
);
