export const ChevronLeft = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.5 19-7-7 7-7"
    />
  </svg>
);

export const Album = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill="#fff">
      <path
        d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z"
        opacity={0.4}
      />
      <path d="m15.62 7.1-2.29-.76c-.58-.2-1.17-.12-1.62.2-.45.32-.7.86-.7 1.47v4.79c-.4-.22-.85-.35-1.34-.35-1.54 0-2.8 1.26-2.8 2.8 0 1.54 1.26 2.8 2.8 2.8 1.54 0 2.8-1.26 2.8-2.8V10.7c.01.01.03.01.04.02l2.29.76c.21.07.43.11.64.11.36 0 .7-.1.98-.31.45-.32.7-.86.7-1.47V9.2c0-.91-.64-1.81-1.5-2.1Zm-5.95 9.49c-.74 0-1.33-.6-1.33-1.33 0-.74.6-1.34 1.33-1.34.74 0 1.34.6 1.34 1.34 0 .73-.6 1.33-1.34 1.33Z" />
    </g>
  </svg>
);

export const ChevronRight = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.958 3.417 9.042 7.5l-4.084 4.083"
    />
  </svg>
);

export const Search = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M9.583 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM18.333 18.333l-1.666-1.666" />
    </g>
  </svg>
);

export const HeadPhone = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill="#fff">
      <path
        d="M2.75 18.65c-.41 0-.75-.34-.75-.75v-5.7c-.05-2.71.96-5.27 2.84-7.19 1.88-1.91 4.4-2.96 7.11-2.96C17.49 2.05 22 6.56 22 12.1v5.7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.7c0-4.71-3.83-8.55-8.55-8.55-2.31 0-4.45.89-6.04 2.51-1.6 1.63-2.45 3.8-2.41 6.12v5.71c0 .42-.33.76-.75.76Z"
        opacity={0.4}
      />
      <path d="M5.94 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81ZM18.19 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81Z" />
    </g>
  </svg>
);

export const Clock = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill="#fff">
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        opacity={0.4}
      />
      <path d="M15.71 15.93a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z" />
    </g>
  </svg>
);

export const Home = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="m20.83 8.01-6.55-5.24C13 1.75 11 1.74 9.73 2.76L3.18 8.01c-.94.75-1.51 2.25-1.31 3.43l1.26 7.54C3.42 20.67 4.99 22 6.7 22h10.6c1.69 0 3.29-1.36 3.58-3.03l1.26-7.54c.18-1.17-.39-2.67-1.31-3.42ZM12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Z"
    />
  </svg>
);

export const Discover = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g fill="#fff">
      <path
        d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10C0 4.478 4.477 0 10 0s10 4.478 10 10Z"
        opacity={0.4}
      />
      <path d="m13.86 6.705-1.62 5.12c-.06.21-.23.38-.44.44l-5.1 1.6a.448.448 0 0 1-.56-.56l1.6-5.13c.06-.21.23-.37.44-.44l5.12-1.6c.35-.11.67.22.56.57Z" />
    </g>
  </svg>
);
