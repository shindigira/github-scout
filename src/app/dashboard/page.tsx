import { HydrateClient } from '@/trpc/server';

export default async function Dashboard() {
  return (
    <HydrateClient>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              GitHub Repositories
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore and manage your GitHub repositories.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Search & Filter
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Find repositories by name, language, or other criteria.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Analytics</h2>
            <p className="text-gray-600 dark:text-gray-300">
              View insights and statistics about your repositories.
            </p>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
