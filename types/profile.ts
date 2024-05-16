import { z } from "zod";

const nameSchema = z.object({
  fieldId: z.string(),
  name_en: z.string(),
  name_ja: z.string(),
});

const jobTitleSchema = z.object({
  fieldId: z.string(),
  job_title_en: z.string(),
  job_title_ja: z.string(),
});

const descriptionSchema = z.object({
  fieldId: z.string(),
  description_en: z.string(),
  description_ja: z.string(),
});

export const profileSchema = z.object({
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
  name: nameSchema,
  job_title: jobTitleSchema,
  description: descriptionSchema,
});

export type Profile = z.infer<typeof profileSchema>;
