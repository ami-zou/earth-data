import { memo, SVGProps } from 'react';

const Vector6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 103 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.953411 20.3182C3.64175 7.01108 11.3573 -13.2319 20.7126 12.2533C30.0679 37.7385 36.1703 22.8721 38.0522 12.2533C42.3535 11.3124 51.2787 12.3339 52.5691 23.9474C53.8594 35.561 63.86 23.6786 68.6989 16.2858C71.1729 12.5061 83.1352 18.7052 86.0385 26.7702C88.9419 34.8351 98.2704 39.5397 102.572 40.8838'
      stroke='#344BFD'
      strokeWidth={0.868772}
    />
  </svg>
);

const Memo = memo(Vector6Icon);
export { Memo as Vector6Icon };
