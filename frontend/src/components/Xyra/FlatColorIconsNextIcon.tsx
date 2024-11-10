import { memo, SVGProps } from 'react';

const FlatColorIconsNextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.96477 1.0595L7.53051 1.62524L4.62882 4.52693L7.53051 7.42862L6.96477 7.99436L3.51559 4.52693L6.96477 1.0595Z'
      fill='#717171'
    />
  </svg>
);

const Memo = memo(FlatColorIconsNextIcon);
export { Memo as FlatColorIconsNextIcon };
