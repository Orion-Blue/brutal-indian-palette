import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import { Text } from '../atoms/Text';

interface QuickActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label: string;
  color: string;
}

export const QuickAction = ({ icon: Icon, label, color, ...props }: QuickActionProps) => {
  return (
    <button
      style={{
        background: '#FFF5E0',
        border: '2px solid #2D3561',
        borderRadius: '16px',
        padding: '20px 12px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '5px 5px 0px #2D3561',
      }}
      {...props}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          background: color,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #2D3561',
        }}
      >
        <Icon size={24} color="#FFFFFF" strokeWidth={2.5} />
      </div>
      <Text variant="micro" weight="extrabold" font="jakarta" uppercase>
        {label}
      </Text>
    </button>
  );
};
