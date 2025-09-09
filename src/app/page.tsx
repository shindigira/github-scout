import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function RootPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  // If user is authenticated, redirect to sync-user to ensure data is synced
  return redirect('/sync-user');
}
