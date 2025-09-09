import { auth, clerkClient } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  return (
    <main className="container mx-auto px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dashboard</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">User Info</h2>
          <p className="text-gray-600 dark:text-gray-300">First Name: {user.firstName}</p>
          <p className="text-gray-600 dark:text-gray-300">Last Name: {user.lastName}</p>
          <p className="text-gray-600 dark:text-gray-300">
            Email: {user.emailAddresses[0]?.emailAddress}
          </p>
        </div>
      </div>
    </main>
  );
}
