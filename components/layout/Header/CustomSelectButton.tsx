'use client';

import dynamic from 'next/dynamic';
import headerStyles from './Header.module.scss';
import { REAL_ESTATE_OPTIONS } from '@/constants';

const CustomSelect = dynamic(
  () => import('@/components/ui/CustomSelect').then((m) => m.CustomSelect),
  {
    ssr: false,
    loading: () => {
      return <div className={headerStyles.selectLoader}></div>;
    },
  },
);

type CustomSelectButtonProps = {
  className?: string;
};

export const CustomSelectButton = ({ className }: CustomSelectButtonProps) => {
  return <CustomSelect className={className} options={REAL_ESTATE_OPTIONS} />;
};
