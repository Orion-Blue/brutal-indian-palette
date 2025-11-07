import { Search } from 'lucide-react';
import { InputHTMLAttributes } from 'react';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearchChange?: (value: string) => void;
}

export const SearchBar = ({ onSearchChange, ...props }: SearchBarProps) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      <Search
        size={20}
        color="#808080"
        strokeWidth={2.5}
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
      <input
        type="text"
        placeholder="Search contacts..."
        style={{
          width: '100%',
          padding: '14px 16px 14px 48px',
          borderRadius: '16px',
          border: '2px solid #2D3561',
          background: '#FFFFFF',
          fontSize: '14px',
          fontWeight: '600',
          color: '#1A1A1A',
          fontFamily: "'Inter', sans-serif",
          boxShadow: '4px 4px 0px rgba(45, 53, 97, 0.3)',
        }}
        onChange={(e) => onSearchChange?.(e.target.value)}
        {...props}
      />
    </div>
  );
};
