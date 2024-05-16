import "server-only";
import { Language } from "@/types/language";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  ja: () => import("@/dictionaries/ja.json").then((module) => module.default),
};

export const getDictionary = async (locale: Language) => dictionaries[locale]();
