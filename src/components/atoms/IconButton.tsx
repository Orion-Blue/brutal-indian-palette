import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  variant?: 'default' | 'colored' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  iconSize?: number;
  iconStrokeWidth?: number;
}

export const IconButton = ({
  icon: Icon,
  variant = 'default',
  size = 'md',
  color,
  iconSize = 22,
  iconStrokeWidth = 2.5,
  className = '',
  ...props
}: IconButtonProps) => {
  const sizeStyles = {
    sm: { width: '36px', height: '36px' },
    md: { width: '44px', height: '44px' },
    lg: { width: '52px', height: '52px' },
  };

  const variantStyles = {
    default: {
      background: '#FFFFFF',
      border: '2px solid #2D3561',
    },
    colored: {
      background: color || '#FF6B35',
      border: '2px solid #2D3561',
      boxShadow: '3px 3px 0px #2D3561',
    },
    ghost: {
      background: 'transparent',
      border: 'none',
    },
  };

  const iconColor = variant === 'colored' ? '#FFFFFF' : '#808080';

  return (
    <button
      style={{
        ...sizeStyles[size],
        ...variantStyles[variant],
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s',
        ...props.style,
      }}
      className={className}
      {...props}
    >
      <Icon size={iconSize} color={iconColor} strokeWidth={iconStrokeWidth} />
    </button>
  );
};
