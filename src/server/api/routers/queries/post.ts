import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getLatestPost } from "@/lib/dal/post";

export const postRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`,
			};
		}),

	create: publicProcedure
		.input(z.object({ name: z.string().min(1) }))
		.mutation(async ({ ctx, input }) => {
			return ctx.db.post.create({
				data: {
					name: input.name,
				},
			});
		}),

	getLatest: publicProcedure.query(async () => {
		return await getLatestPost();
	}),
});
