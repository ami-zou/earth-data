import { memo, SVGProps } from 'react';

const Group3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={3.6638} cy={2.78112} r={2.73745} fill='#FFD200' />
  </svg>
);

const Memo = memo(Group3Icon);
export { Memo as Group3Icon };
