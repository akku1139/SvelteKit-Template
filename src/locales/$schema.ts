export type schema = {
  langname: string;
  langname_en: string;
};

const langs = [
  "en",
  "ja",
] as const;

export type langs =
  "en" |
  "ja"
;
