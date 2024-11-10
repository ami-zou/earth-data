import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 93 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.167627 3.37993L4.14845 0.784568C5.88177 0.591976 6.33615 4.32612 7.57209 4.62039C9.11701 4.98823 12.1333 3.36974 12.6483 4.62039C13.1632 5.87104 15.4438 11.2415 17.7244 10.138C20.005 9.03445 23.6834 3.36974 27.0675 8.07807C30.4516 12.7864 31.7023 16.8326 35.6014 13.1542C38.7207 10.2115 44.1567 5.41191 46.4848 3.37993C48.392 3.61684 52.6423 5.30012 54.386 10.138C56.1297 14.9758 59.4718 10.7805 60.9249 8.07807L68.0087 13.1542C69.4618 15.9989 73.1853 19.9813 76.4548 13.1542C80.5416 4.62039 81.3589 -0.907381 83.811 1.23628C85.7727 2.9512 90.2591 9.89614 92.2571 13.1542'
      stroke='#001DFF'
      strokeWidth={0.434386}
    />
  </svg>
);

const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };