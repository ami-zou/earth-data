import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 93 55' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.167627 3.37993V54.8738H92.2571V13.1542C90.2591 9.89614 85.7727 2.9512 83.811 1.23628C81.3589 -0.907381 80.5416 4.62039 76.4548 13.1542C73.1853 19.9813 69.4618 15.9989 68.0087 13.1542L60.9249 8.07807C59.4718 10.7805 56.1297 14.9758 54.386 10.138C52.6423 5.30012 48.392 3.61684 46.4848 3.37993C44.1567 5.41191 38.7207 10.2115 35.6014 13.1542C31.7023 16.8326 30.4516 12.7864 27.0675 8.07807C23.6834 3.36974 20.005 9.03445 17.7244 10.138C15.4438 11.2415 13.1632 5.87104 12.6483 4.62039C12.1333 3.36974 9.11701 4.98823 7.57209 4.62039C6.33615 4.32612 5.88177 0.591976 4.14845 0.784568L0.167627 3.37993Z'
      fill='url(#paint0_linear_36_982)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_36_982'
        x1={46.2124}
        y1={0.773407}
        x2={46.2124}
        y2={54.8738}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#ADB7F9' />
        <stop offset={1} stopColor='#B1B9F8' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
