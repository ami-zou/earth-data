import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 3' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={1.0831} cy={1.43458} r={0.897512} fill='#344BFD' />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
