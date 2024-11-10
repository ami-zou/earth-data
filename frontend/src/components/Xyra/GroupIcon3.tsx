import { memo, SVGProps } from 'react';

const GroupIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.2} d='M7.21875 7.21875H0V0L7.21875 7.21875Z' fill='#3A3A3A' />
  </svg>
);

const Memo = memo(GroupIcon3);
export { Memo as GroupIcon3 };
