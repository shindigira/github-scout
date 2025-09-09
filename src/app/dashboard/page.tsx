import { auth, clerkClient } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { NavBar } from '@/components/navbar';

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    return redirect('/sign-in');
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <NavBar title="Dashboard" />
      </div>
    </main>
  );
}

// {/* Main content grid */}
// <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//   {/* User Info Card */}
//   <div className="bg-card border border-border rounded-lg shadow-sm p-6">
//     <h2 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
//       <svg
//         className="h-5 w-5 mr-2 text-primary"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//         />
//       </svg>
//       User Information
//     </h2>
//     <div className="space-y-3">
//       <div className="flex items-center justify-between">
//         <span className="text-muted-foreground">First Name:</span>
//         <span className="text-card-foreground font-medium">{user.firstName || 'N/A'}</span>
//       </div>
//       <div className="flex items-center justify-between">
//         <span className="text-muted-foreground">Last Name:</span>
//         <span className="text-card-foreground font-medium">{user.lastName || 'N/A'}</span>
//       </div>
//       <div className="flex items-center justify-between">
//         <span className="text-muted-foreground">Email:</span>
//         <span className="text-card-foreground font-medium">
//           {user.emailAddresses[0]?.emailAddress || 'N/A'}
//         </span>
//       </div>
//     </div>
//   </div>

//   {/* Stats Card */}
//   <div className="bg-card border border-border rounded-lg shadow-sm p-6">
//     <h2 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
//       <svg
//         className="h-5 w-5 mr-2 text-primary"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
//         />
//       </svg>
//       Account Stats
//     </h2>
//     <div className="space-y-3">
//       <div className="flex items-center justify-between">
//         <span className="text-muted-foreground">Account Created:</span>
//         <span className="text-card-foreground font-medium">
//           {new Date(user.createdAt).toLocaleDateString()}
//         </span>
//       </div>
//       <div className="flex items-center justify-between">
//         <span className="text-muted-foreground">Last Updated:</span>
//         <span className="text-card-foreground font-medium">
//           {new Date(user.updatedAt).toLocaleDateString()}
//         </span>
//       </div>
//       <div className="flex items-center justify-between">
//         <span className="text-muted-foreground">Status:</span>
//         <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
//           Active
//         </span>
//       </div>
//     </div>
//   </div>

//   {/* Quick Actions Card */}
//   <div className="bg-card border border-border rounded-lg shadow-sm p-6">
//     <h2 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
//       <svg
//         className="h-5 w-5 mr-2 text-primary"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M13 10V3L4 14h7v7l9-11h-7z"
//         />
//       </svg>
//       Quick Actions
//     </h2>
//     <div className="space-y-3">
//       <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium transition-colors">
//         Sync GitHub Data
//       </button>
//       <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg font-medium transition-colors">
//         View Repositories
//       </button>
//       <button className="w-full border border-border text-foreground hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-lg font-medium transition-colors">
//         Settings
//       </button>
//     </div>
//   </div>
// </div>

// {/* Welcome Message */}
// <div className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-lg p-6">
//   <h3 className="text-lg font-semibold text-foreground mb-2">
//     Welcome back, {user.firstName || 'User'}! 👋
//   </h3>
//   <p className="text-muted-foreground">
//     Ready to explore your GitHub repositories and discover new insights? Use the quick
//     actions above to get started.
//   </p>
// </div>
