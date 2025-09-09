# GitHub Scout - Project Structure

This document outlines the current project structure and organization of the GitHub Scout application.

## 📁 Root Directory Structure

```
github-scout/
├── .env                    # Environment variables (not tracked)
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── biome.jsonc            # Biome formatter/linter configuration
├── components.json        # Shadcn/ui components configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── prisma/                # Database schema and migrations
│   ├── schema.prisma      # Prisma database schema
│   └── dev.db            # SQLite development database
├── public/                # Static assets
│   └── favicon.ico        # Site favicon
├── src/                   # Source code
└── PROJECT_STRUCTURE.md   # This file
```

## 🏗️ Source Code Structure (`src/`)

```
src/
├── app/                   # Next.js App Router
│   ├── layout.tsx         # Global HydrateClient + ClerkProvider
│   ├── page.tsx          # Auth wrapper around Dashboard
│   ├── dashboard/        # Dashboard functionality
│   │   └── page.tsx      # Clean dashboard component
│   ├── sync-user/        # User data sync functionality
│   │   └── page.tsx      # Sync Clerk users with database
│   ├── (auth)/           # Auth route group (invisible to URLs)
│   │   ├── layout.tsx    # Shared auth layout
│   │   ├── sign-in/      # Sign-in page
│   │   │   └── [[...sign-in]]/
│   │   │       └── page.tsx
│   │   └── sign-up/      # Sign-up page
│   │       └── [[...sign-up]]/
│   │           └── page.tsx
│   └── api/              # API routes
│       └── trpc/         # TRPC API routes
│           └── [trpc]/
│               └── route.ts
├── components/           # Reusable UI components
│   ├── post.tsx         # Post component
│   └── ui/              # Shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ... (other UI components)
├── hooks/                # Custom React hooks
│   └── use-mobile.ts    # Mobile detection hook
├── lib/                  # Utility functions
│   └── utils.ts         # Common utilities
├── server/               # Server-side code
│   ├── api/             # TRPC API setup
│   │   ├── root.ts      # Root router
│   │   ├── routers/     # Individual routers
│   │   │   └── post.ts  # Post router
│   │   └── trpc.ts      # TRPC configuration
│   └── db.ts            # Database connection
├── styles/               # Global styles
│   └── globals.css       # Global CSS
├── trpc/                 # TRPC client setup
│   ├── query-client.ts  # React Query client
│   ├── react.tsx        # TRPC React provider
│   └── server.ts        # Server-side TRPC
├── env.js               # Environment validation
└── middleware.ts        # Next.js middleware (Clerk auth)
```

## 🔧 Key Configuration Files

### Authentication & Database
- **Clerk**: User authentication and management
- **Prisma**: Database ORM with PostgreSQL (Neon)
- **TRPC**: Type-safe API layer

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Pre-built component library
- **Biome**: Code formatting and linting

### Development Tools
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety
- **React Query**: Server state management

## 🚀 Key Features

### Authentication Flow
1. **Unauthenticated users** → Redirected to `/sign-in`
2. **After sign-in/sign-up** → Redirected to `/dashboard` (home page)
3. **Protected routes** → Middleware protects all non-auth routes

### User Data Synchronization
- **Sync-user page**: Synchronizes Clerk user data with database
- **Automatic upsert**: Creates new users or updates existing ones
- **Default credits**: New users get 150 credits

### Component Organization
- **Global providers**: HydrateClient and ClerkProvider in root layout
- **Route groups**: Auth routes grouped with `(auth)` for organization
- **Reusable components**: UI components in `/components` directory

## 📝 Maintenance Notes

- **Environment variables**: All sensitive data in `.env` (not tracked)
- **Database**: Uses Neon PostgreSQL with connection pooling
- **Styling**: Consistent Tailwind classes with dark mode support
- **Type safety**: Full TypeScript coverage with TRPC for API types

## 🔄 Recent Changes

- Moved `HydrateClient` to root layout for global TRPC hydration
- Created auth route group `(auth)` for better organization
- Implemented user sync functionality
- Simplified dashboard component structure
- Added proper authentication flow with redirects

---

*Last updated: $(date)*
*Maintain this file when making structural changes to the project.*
