import { z } from "zod";

const titleSchema = z.object({
  fieldId: z.string(),
  title_en: z.string(),
  title_ja: z.string(),
});

const descriptionSchema = z.object({
  fieldId: z.string(),
  description_en: z.string(),
  description_ja: z.string(),
});

const contentSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
  title: titleSchema,
  description: descriptionSchema,
  blog_url: z.string().url(),
  image: z.object({
    url: z.string().url(),
  }),
});

export const blogsSchema = z.object({
  contents: z.array(contentSchema),
  totalCount: z.number(),
  offset: z.number(),
  limit: z.number(),
});

export type Blogs = z.infer<typeof blogsSchema>;
