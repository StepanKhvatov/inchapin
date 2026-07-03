'use client';

import { useMediaQuery } from 'usehooks-ts';
import { Button } from '@/components/ui/Button';
import { PhoneIcon } from '@/components/ui/icons/PhoneIcon';

type OpenRequestButton = {
  onClick: () => void;
  className?: string;
};

const LABEL = 'Заказать звонок';

export const OpenRequestButton = ({
  onClick,
  className,
}: OpenRequestButton) => {
  const showOutlineButton = useMediaQuery('(max-width: 1023px)');

  return showOutlineButton ? (
    <Button
      aria-label={LABEL}
      type="button"
      variant="outline"
      className={className}
      onClick={onClick}
    >
      <PhoneIcon />
    </Button>
  ) : (
    <Button
      type="button"
      variant="text"
      label={LABEL}
      className={className}
      onClick={onClick}
    />
  );
};
