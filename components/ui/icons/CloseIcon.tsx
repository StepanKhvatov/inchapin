import type { IconProps } from './types';

export const CloseIcon = ({ className }: IconProps) => {
  return (
    <svg
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M26.3535 0.353516L0.353931 26.3531" stroke="currentColor" />
      <path d="M0.353516 0.353516L26.3531 26.3531" stroke="currentColor" />
    </svg>
  );
};
