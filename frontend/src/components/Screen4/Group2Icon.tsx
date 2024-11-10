import { memo, SVGProps } from 'react';

const Group2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={2.17193} cy={3} r={2.17193} fill='#344BFD' />
  </svg>
);

const Memo = memo(Group2Icon);
export { Memo as Group2Icon };
