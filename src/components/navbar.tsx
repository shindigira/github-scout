import { ThemeToggle } from './theme-toggle';

interface NavBarProps {
  title?: string;
  children?: React.ReactNode;
}

export function NavBar({ title = "Dashboard", children }: NavBarProps) {
  return (
    <nav className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold text-foreground">{title}</h1>
        {children}
      </div>
      <ThemeToggle />
    </nav>
  );
}
