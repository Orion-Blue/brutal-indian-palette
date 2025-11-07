import { Avatar } from '../atoms/Avatar';
import { Text } from '../atoms/Text';

interface ContactChipProps {
  name: string;
  initial: string;
  color: string;
  onClick?: () => void;
}

export const ContactChip = ({ name, initial, color, onClick }: ContactChipProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        minWidth: '70px',
      }}
    >
      <Avatar initial={initial} color={color} size="lg" />
      <Text variant="caption" weight="bold" font="jakarta">
        {name}
      </Text>
    </button>
  );
};
