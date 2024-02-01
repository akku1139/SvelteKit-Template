export let lang = "ja";

import en from "../locales/en.ts";
import ja from "../locales/ja.ts";

const locales = {
  en: en,
  ja: ja,
};

export function t(name: string): string {
  return locales[lang][name];
}
