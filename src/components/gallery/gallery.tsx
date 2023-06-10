import React, { ReactNode } from "react";

interface IGalleryProps {
  children: ReactNode;
}

export const Gallery: React.FC<IGalleryProps> = ({ children }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-full mx-auto w-[64rem]">
      {children}
    </ul>
  );
};
