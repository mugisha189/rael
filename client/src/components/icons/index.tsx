import { ReactNode } from "react";

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size: number;
}

export const IconWrapper = (props: IconWrapperProps) => {
  let newProp = { ...props };
  delete newProp.children;
  const { children, size } = props;
  return (
    <div style={{ width: size, height: size }} {...props}>
      {children}
    </div>
  );
};

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
}

export const MailIcon = (props: IconProps) => (
  <IconWrapper {...props}>
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
    </svg>
  </IconWrapper>
);
