import { useIMask } from 'react-imask';

import { Input, type InputProps } from './Input';
import { PHONE_MASK } from '@/constants';

export const PhoneInput = (props: InputProps) => {
  const { ref } = useIMask<HTMLInputElement>({
    mask: PHONE_MASK,
  });

  return <Input ref={ref} {...props} />;
};
