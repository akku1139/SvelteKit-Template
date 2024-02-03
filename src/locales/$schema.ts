export type schema = {
  langname: string;
  langname_en: string;
};

export const langs = [
  "en",
  "ja",
] as const;

export type langs = typeof langs[number];
