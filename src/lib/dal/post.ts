import { cache } from "react";
import { db } from "@/server/db";

/**
 * Data Access Layer for Posts - Pure read operations with caching
 */

export const getLatestPost = cache(async () => {
  return await db.post.findFirst({
    orderBy: { createdAt: "desc" },
  });
});

export const getAllPosts = cache(async () => {
  return await db.post.findMany({
    orderBy: { createdAt: "desc" },
  });
});

export const getPostById = cache(async (id: number) => {
  return await db.post.findUnique({
    where: { id },
  });
});
