import { QuickAction } from '../molecules/QuickAction';
import { LucideIcon } from 'lucide-react';

interface QuickActionItem {
  icon: LucideIcon;
  label: string;
  color: string;
  onClick?: () => void;
}

interface QuickActionsGridProps {
  actions: QuickActionItem[];
}

export const QuickActionsGrid = ({ actions }: QuickActionsGridProps) => {
  return (
    <div style={{ padding: '0 20px 24px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          background: '#FFFFFF',
          padding: '20px',
          borderRadius: '20px',
          border: '3px solid #2D3561',
          boxShadow: '6px 6px 0px rgba(45, 53, 97, 0.3)',
        }}
      >
        {actions.map((action, index) => (
          <QuickAction
            key={index}
            icon={action.icon}
            label={action.label}
            color={action.color}
            onClick={action.onClick}
          />
        ))}
      </div>
    </div>
  );
};
