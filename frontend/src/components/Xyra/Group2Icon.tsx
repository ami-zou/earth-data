import { memo, SVGProps } from 'react';

const Group2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={3.1638} cy={2.78112} r={2.73745} fill='#F68D2B' />
  </svg>
);

const Memo = memo(Group2Icon);
export { Memo as Group2Icon };
