'use client';

import { useState, useEffect, useCallback } from 'react';

// Custom hook for theme management
function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((isDarkMode: boolean) => {
    const docEl = document.documentElement;
    docEl.classList.toggle('dark', isDarkMode);
    docEl.style.colorScheme = isDarkMode ? 'dark' : 'light';
  }, []);

  const initializeTheme = useCallback(() => {
    const storageKey = 'theme';
    
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === 'light') {
        applyTheme(false);
        setIsDark(false);
        return;
      }
      if (stored === 'dark') {
        applyTheme(true);
        setIsDark(true);
        return;
      }
    } catch {
      // localStorage blocked, continue to system check
    }

    // system (default) - check media query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    applyTheme(mql.matches);
    setIsDark(mql.matches);
    
    // Listen for system theme changes
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(storageKey);
      if (!stored || stored === 'system') {
        applyTheme(e.matches);
        setIsDark(e.matches);
      }
    };
    
    mql.addEventListener('change', handleSystemThemeChange);
    
    // Cleanup listener
    return () => mql.removeEventListener('change', handleSystemThemeChange);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark);
    
    // Save to localStorage
    try {
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    } catch {
      // localStorage might be blocked
    }
  }, [isDark, applyTheme]);

  useEffect(() => {
    setMounted(true);
    const cleanup = initializeTheme();
    return cleanup;
  }, [initializeTheme]);

  return {
    isDark,
    mounted,
    toggleTheme,
  };
}

export function ThemeToggle() {
  const { isDark, mounted, toggleTheme } = useTheme();

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground shadow-sm h-10 w-20">
        <div className="h-4 w-4 animate-pulse bg-muted-foreground/20 rounded"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
      <span className="ml-2 hidden sm:inline">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
}
