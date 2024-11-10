import { memo, SVGProps } from 'react';

const Star1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.79588 0.381721L3.27628 1.86026H4.83091L3.57319 2.77404L4.0536 4.25258L2.79588 3.33879L1.53816 4.25258L2.01857 2.77404L0.760848 1.86026H2.31547L2.79588 0.381721Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Star1Icon);
export { Memo as Star1Icon };
