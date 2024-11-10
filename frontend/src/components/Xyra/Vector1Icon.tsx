import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 116 69' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.0190544 3.68647V68.4829H115.898V15.9858C113.384 11.886 107.739 3.14698 105.27 0.98903C102.185 -1.70841 101.156 5.24737 96.0137 15.9858C91.8997 24.5766 87.2142 19.5653 85.3857 15.9858L76.4719 9.59829C74.6435 12.9988 70.438 18.2779 68.2438 12.1903C66.0497 6.1027 60.7014 3.98457 58.3015 3.68647C55.372 6.24337 48.5316 12.2829 44.6065 15.9858C39.7002 20.6144 38.1264 15.5229 33.8681 9.59829C29.6098 3.67364 24.9811 10.8017 22.1114 12.1903C19.2416 13.5789 16.3719 6.82111 15.7239 5.24737C15.0758 3.67364 11.2804 5.71024 9.33634 5.24737C7.78112 4.87708 7.20935 0.178286 5.02826 0.42063L0.0190544 3.68647Z'
      fill='url(#paint0_linear_64_2346)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_64_2346'
        x1={57.9587}
        y1={0.406586}
        x2={57.9587}
        y2={68.4829}
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
