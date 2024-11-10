import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.75 14.9167L9.08333 10.25C8.66667 10.5833 8.1875 10.8472 7.64583 11.0417C7.10417 11.2361 6.52778 11.3333 5.91667 11.3333C4.40278 11.3333 3.12167 10.8092 2.07333 9.76083C1.02444 8.71194 0.5 7.43056 0.5 5.91667C0.5 4.40278 1.02444 3.12139 2.07333 2.0725C3.12167 1.02417 4.40278 0.5 5.91667 0.5C7.43056 0.5 8.71194 1.02417 9.76083 2.0725C10.8092 3.12139 11.3333 4.40278 11.3333 5.91667C11.3333 6.52778 11.2361 7.10417 11.0417 7.64583C10.8472 8.1875 10.5833 8.66667 10.25 9.08333L14.9375 13.7708C15.0903 13.9236 15.1667 14.1111 15.1667 14.3333C15.1667 14.5556 15.0833 14.75 14.9167 14.9167C14.7639 15.0694 14.5694 15.1458 14.3333 15.1458C14.0972 15.1458 13.9028 15.0694 13.75 14.9167ZM5.91667 9.66667C6.95833 9.66667 7.84389 9.30222 8.57333 8.57333C9.30222 7.84389 9.66667 6.95833 9.66667 5.91667C9.66667 4.875 9.30222 3.98944 8.57333 3.26C7.84389 2.53111 6.95833 2.16667 5.91667 2.16667C4.875 2.16667 3.98944 2.53111 3.26 3.26C2.53111 3.98944 2.16667 4.875 2.16667 5.91667C2.16667 6.95833 2.53111 7.84389 3.26 8.57333C3.98944 9.30222 4.875 9.66667 5.91667 9.66667Z'
      fill='#3B4758'
    />
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
