import { writable, derived } from "svelte/store";
import type { schema, langs } from "../locales/$schema.ts";

//import en from "../locales/en.ts";
//import ja from "../locales/ja.ts";

/*
const locales = {
  en: en,
  ja: ja,
};
*/

export const lang = writable<langs>("en");

let locale:schema;

export const t = derived(
  lang,
  ($lang) => {
    (async () => {locale = await import("../locales/"+$lang+".ts");});
    return (msg) => {
      return locale[msg];
    };
  },
);

/*
(msg: keyof typeof locales[langs]) => {
  return locales[$lang][msg];
},
*/
