import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import { Text } from '../atoms/Text';
import { cn } from '@/lib/utils';

interface QuickActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label: string;
  color: string;
}

export const QuickAction = ({ icon: Icon, label, color, className, ...props }: QuickActionProps) => {
  return (
    <button
      className={cn(
        'flex flex-col items-center gap-3 p-4 rounded-2xl bg-card hover:bg-muted transition-all active:scale-95',
        className
      )}
      {...props}
    >
      <div
        style={{ backgroundColor: color }}
        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
      >
        <Icon size={24} color="#FFFFFF" strokeWidth={2} />
      </div>
      <Text variant="caption" weight="medium" className="text-foreground">
        {label}
      </Text>
    </button>
  );
};
