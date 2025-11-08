import { QuickAction } from '../molecules/QuickAction';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickActionItem {
  icon: LucideIcon;
  label: string;
  color: string;
  onClick?: () => void;
}

interface QuickActionsGridProps {
  actions: QuickActionItem[];
  className?: string;
}

export const QuickActionsGrid = ({ actions, className }: QuickActionsGridProps) => {
  return (
    <div className={cn('grid grid-cols-3 gap-3', className)}>
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
  );
};
