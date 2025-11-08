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
        'flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-muted transition-all active:scale-95',
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
