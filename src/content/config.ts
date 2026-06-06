import { defineCollection, z } from "astro:content";

const artworks = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      year: z.union([z.number(), z.string()]).optional(),
      medium: z.string().optional(),
      // 作品尺寸,如「30 x 40 cm」。可选。
      size: z.string().optional(),
      // 作品所属系列 / 主题。作品集页面按此分组。留空则归入「其他作品」。
      series: z.string().optional(),
      // Lower numbers appear first on the home grid.
      order: z.number().default(100),
      featured: z.boolean().default(false),
    }),
});

export const collections = { artworks };
