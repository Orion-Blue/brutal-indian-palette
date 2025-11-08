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
        'bg-card rounded-2xl p-5 text-center shadow-md transition-all hover:shadow-lg',
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
