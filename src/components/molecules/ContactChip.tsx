import { Avatar } from '../atoms/Avatar';
import { Text } from '../atoms/Text';
import { cn } from '@/lib/utils';

interface ContactChipProps {
  name: string;
  initial: string;
  color: string;
  onClick?: () => void;
  className?: string;
}

export const ContactChip = ({ name, initial, color, onClick, className }: ContactChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/80 backdrop-blur-nav border border-border/30 hover:bg-muted/70 transition-all active:scale-[0.98] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        className
      )}
    >
      <Avatar initial={initial} color={color} size="md" />
      <Text variant="caption" weight="medium" className="text-foreground">
        {name}
      </Text>
    </button>
  );
};
