import { defineCollection, z } from 'astro:content';

const thinkingOutLoud = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'thinking-out-loud': thinkingOutLoud,
};
