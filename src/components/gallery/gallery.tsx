import React, { ReactNode } from "react";

interface IGalleryProps {
  children: ReactNode;
  className?: string;
}

export const Gallery: React.FC<IGalleryProps> = ({ children, className }) => {
  return (
    <ul
      className={`flex flex-nowrap overflow-scroll md:grid md:overflow-hidden m-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-full mx-auto w-[64rem] h-fit mb-24  ${className}`}
    >
      {children}
    </ul>
  );
};
