import { Text } from '../atoms/Text';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string;
  color: string;
  icon: string;
  className?: string;
}

export const StatCard = ({ label, value, color, icon, className }: StatCardProps) => {
  return (
    <div
      className={cn(
        'bg-card/80 backdrop-blur-nav border border-border/30 rounded-2xl p-6 text-center shadow-sm transition-all hover:shadow-md hover:bg-muted/70 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer',
        className
      )}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <Text variant="h3" weight="bold" style={{ color }} className="block mb-1">
        {value}
      </Text>
      <Text variant="caption" weight="medium" className="text-muted-foreground">
        {label}
      </Text>
    </div>
  );
};
