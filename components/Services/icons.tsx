import * as React from "react";

export const Medal = React.memo(() => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
    <path
      d="M20 25c6.443 0 11.667-5.223 11.667-11.667C31.667 6.89 26.443 1.667 20 1.667S8.333 6.89 8.333 13.333C8.333 19.777 13.557 25 20 25z"
      stroke="#6A7EE7"
      strokeWidth="3.333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.683 23.15l-2.016 15.183 8.333-5 8.333 5-2.016-15.2"
      stroke="#6A7EE7"
      strokeWidth="3.333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

export const Tool = React.memo(() => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40">
    <path
      d="M24.835 10.5a1.667 1.667 0 000 2.333l2.667 2.667a1.667 1.667 0 002.333 0l6.283-6.283A10 10 0 0122.885 22.45L11.368 33.967a3.536 3.536 0 01-5-5L17.885 17.45A10 10 0 0131.118 4.217l-6.266 6.266-.017.017z"
      stroke="#6A7EE7"
      strokeWidth="3.33"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

export const Truck = React.memo(() => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40">
    <g
      clipPath="url(#clip0)"
      stroke="#6A7EE7"
      strokeWidth="3.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.3 5h25v21.7h-25V5zM27.3 13.3H34l5 5v8.4H27.3V13.3z" />
      <path d="M9.8 35a4.2 4.2 0 100-8.3 4.2 4.2 0 000 8.3zM31.5 35a4.2 4.2 0 100-8.3 4.2 4.2 0 000 8.3z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" transform="translate(.7)" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
));

export const Pull = React.memo(() => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40">
    <path
      d="M30 35a5 5 0 100-10 5 5 0 000 10zM10 15a5 5 0 100-10 5 5 0 000 10zM21.7 10h5a3.3 3.3 0 013.3 3.3V25M10 15v20"
      stroke="#6A7EE7"
      strokeWidth="3.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

export const Smile = React.memo(() => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 40">
    <path
      d="M20.3 36.7a16.7 16.7 0 100-33.4 16.7 16.7 0 000 33.4z"
      stroke="#6A7EE7"
      strokeWidth="3.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.7 23.3a9 9 0 006.6 3.4c4.2 0 6.7-3.4 6.7-3.4M15.3 15h0M25.3 15h0"
      stroke="#6A7EE7"
      strokeWidth="3.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

export const Battery: React.FC = React.memo((props) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 41 40"
    {...props}
  >
    <g
      clipPath="url(#clip0)"
      stroke="#6A7EE7"
      strokeWidth="3.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 30H5.7a3.3 3.3 0 01-3.4-3.3V13.3A3.3 3.3 0 015.7 10H11m14.7 0H29a3.3 3.3 0 013.3 3.3v13.4A3.3 3.3 0 0129 30h-5.3M39 21.7v-3.4M19 10l-6.7 10h10l-6.6 10" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" transform="translate(.7)" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
));
