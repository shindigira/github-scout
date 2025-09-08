/**
 * Shared type definitions for the application
 */

export type { Post } from "@prisma/client";

// Add your custom types here
export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface CreatePostInput {
  name: string;
}
