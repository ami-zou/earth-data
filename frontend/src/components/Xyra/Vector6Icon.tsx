import { memo, SVGProps } from 'react';

const Vector6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 125 51' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.369656 25.4031C3.65101 9.16057 13.0685 -15.5478 24.4875 15.5591C35.9064 46.6661 43.355 28.5204 45.652 15.5591C50.9021 14.4107 61.7961 15.6576 63.3711 29.8329C64.9461 44.0082 77.1527 29.5048 83.059 20.4811C86.0787 15.8677 100.68 23.4343 104.224 33.2783C107.767 43.1222 119.154 48.8646 124.404 50.5052'
      stroke='#344BFD'
      strokeWidth={1.06041}
    />
  </svg>
);

const Memo = memo(Vector6Icon);
export { Memo as Vector6Icon };
