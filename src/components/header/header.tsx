import React, { ReactNode, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

interface IHeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="h-20 border-b-2 border-grey6">
      <div className=" pr-2 max-w-screen-2xl mx-auto flex justify-between items-center h-full">
        <h2 className="text-transparent bg-gradient-to-r from-grey0 to-brand1 bg-clip-text text-3xl font-bold">
          Motors <span className="text-transparent text-lg">Shop</span>
        </h2>
        <div
          className={`md:flex duration-500 ${
            open
              ? `flex bg-whiteFixed z-10 absolute w-full justify-evenly p-2 m-0 border-b-2 border-grey6 border-l-whiteFixed duration-500 mt-32`
              : "hidden h-full duration-500 top-[-100%] "
          } items-center justify-between gap-8 border-l-2 border-grey6 pl-16`}
        >
          {children}
        </div>
        <div className="md:hidden flex" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </header>
  );
};
