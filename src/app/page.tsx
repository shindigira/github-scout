// import { LatestPost } from "@/app/_components/post";
import { HydrateClient } from '@/trpc/server';

export default async function Home() {
  return (
    <HydrateClient>
      <main className="">
        <h1 className="text-red-500">GitHub Scout</h1>
      </main>
    </HydrateClient>
  );
}
