import { z } from "zod";

export const LOCALES = ["en", "ja"] as const;

export const LANGUAGES = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "ja",
    name: "日本語",
  },
] as const;

export const languageEnum = z.enum(LOCALES);

export type Language = z.infer<typeof languageEnum>;
