import { memo, SVGProps } from 'react';

const Star1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.94934 0.273075L3.42974 1.75161H4.98437L3.72665 2.6654L4.20705 4.14393L2.94934 3.23015L1.69162 4.14393L2.17202 2.6654L0.914305 1.75161H2.46893L2.94934 0.273075Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Star1Icon2);
export { Memo as Star1Icon2 };
