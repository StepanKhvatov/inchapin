import { useIMask } from 'react-imask';

import { Input, type InputProps } from './Input';

const PHONE_MASK = '+7 (000) 000-00-00';

export const PhoneInput = (props: InputProps) => {
  const { ref } = useIMask<HTMLInputElement>({
    mask: PHONE_MASK,
  });

  return <Input ref={ref} {...props} />;
};

PhoneInput.displayName = 'PhoneInput';
