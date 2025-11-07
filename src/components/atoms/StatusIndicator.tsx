import { CSSProperties } from 'react';

interface StatusIndicatorProps {
  status: 'active' | 'inactive' | 'pending';
  size?: 'sm' | 'md';
  withGlow?: boolean;
  style?: CSSProperties;
  className?: string;
}

export const StatusIndicator = ({
  status,
  size = 'md',
  withGlow = true,
  style,
  className = '',
}: StatusIndicatorProps) => {
  const colors = {
    active: '#00FF00',
    inactive: '#808080',
    pending: '#FFD93D',
  };

  const sizes = {
    sm: { width: '4px', height: '4px' },
    md: { width: '6px', height: '6px' },
  };

  const color = colors[status];

  return (
    <span
      style={{
        ...sizes[size],
        background: color,
        borderRadius: '50%',
        display: 'inline-block',
        boxShadow: withGlow ? `0 0 6px ${color}` : 'none',
        ...style,
      }}
      className={className}
    />
  );
};
