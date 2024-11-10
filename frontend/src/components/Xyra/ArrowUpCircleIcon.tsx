import { memo, SVGProps } from 'react';

const ArrowUpCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.4999 16L15.997 11.4917L11.4999 16'
      stroke='#3A3A3A'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.9977 22.1597V11.4917'
      stroke='#3A3A3A'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowUpCircleIcon);
export { Memo as ArrowUpCircleIcon };
