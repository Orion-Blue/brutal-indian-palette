import { Search } from 'lucide-react';
import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearchChange?: (value: string) => void;
}

export const SearchBar = ({ onSearchChange, className, ...props }: SearchBarProps) => {
  return (
    <div className={cn('relative w-full', className)}>
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        strokeWidth={2}
      />
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
        onChange={(e) => onSearchChange?.(e.target.value)}
        {...props}
      />
    </div>
  );
};
