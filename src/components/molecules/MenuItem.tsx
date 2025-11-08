import { LucideIcon } from 'lucide-react';
import { Text } from '../atoms/Text';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItemProps {
  icon: LucideIcon;
  label: string;
  value?: string;
  onClick?: () => void;
  className?: string;
}

export const MenuItem = ({ icon: Icon, label, value, onClick, className }: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center justify-between p-4 hover:bg-muted transition-all active:scale-[0.98] rounded-xl',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          <Icon size={20} className="text-foreground" strokeWidth={2} />
        </div>
        <Text variant="body" weight="medium" className="text-foreground">
          {label}
        </Text>
      </div>
      <div className="flex items-center gap-2">
        {value && (
          <Text variant="body-small" className="text-muted-foreground">
            {value}
          </Text>
        )}
        <ChevronRight size={18} className="text-muted-foreground" strokeWidth={2} />
      </div>
    </button>
  );
};
