import { Avatar } from '../atoms/Avatar';
import { Text } from '../atoms/Text';
import { cn } from '@/lib/utils';

interface TransactionItemProps {
  name: string;
  type: string;
  amount: string;
  date: string;
  initial: string;
  color: string;
  isPositive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const TransactionItem = ({
  name,
  type,
  amount,
  date,
  initial,
  color,
  isPositive = false,
  onClick,
  className,
}: TransactionItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center justify-between p-4 hover:bg-muted/70 transition-all active:scale-[0.98] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar initial={initial} color={color} size="md" />
        <div className="text-left">
          <Text variant="body" weight="semibold" className="text-foreground block">
            {name}
          </Text>
          <Text variant="caption" className="text-muted-foreground block">
            {type} • {date}
          </Text>
        </div>
      </div>
      <Text
        variant="body"
        weight="semibold"
        className={cn(isPositive ? 'text-success' : 'text-foreground')}
      >
        {isPositive ? '+' : '-'}{amount}
      </Text>
    </button>
  );
};
