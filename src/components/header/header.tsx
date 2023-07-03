import React, { ReactNode, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { api } from "@/services/api";
import { IUserAPI } from "@/interfaces";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({} as IUserAPI);
  const [reduceName, setReduceName] = useState("");

  useEffect(() => {
    const checkIsLogged = async () => {
      try {
        const { data } = await api.get("users/");
        setIsLogged(true);
        setUser(data);
        const name = data.name.split(" ");
        setReduceName(name[0][0] + name[1][0]);
      } catch (error) {}
    };
    checkIsLogged();
  }, []);

  return (
    <header className="h-20 border-b-2 bg-whiteFixed border-grey6">
      <div className=" pr-2 pl-4 max-w-screen-2xl mx-auto flex justify-between items-center h-full">
        <Link href={"/"}>
          <h2 className="text-transparent bg-gradient-to-r from-grey0 to-brand1 bg-clip-text text-3xl font-bold">
            Motors <span className="text-transparent text-lg">Shop</span>
          </h2>
        </Link>
        <div
          className={`md:flex duration-500 ${
            open
              ? `flex bg-whiteFixed z-10 absolute w-full justify-evenly p-2 m-0 border-b-2 border-grey6 border-l-whiteFixed duration-500 mt-32`
              : "hidden h-full duration-500 top-[-100%] "
          } items-center justify-between gap-8 border-l-2 border-grey6 pl-16`}
        >
          {!isLogged ? (
            <>
              <Link href="/login">Fazer Login</Link>
              <Link
                href="/register"
                className="border-2 border-grey6 rounded w-36 h-9 font-semibold text-center pt-1"
              >
                Cadastrar
              </Link>
            </>
          ) : (
            <div className="flex gap-2 items-center -ml-8 mr-4 ">
              <p className="bg-brand1 rounded-full w-8 h-8 text-center pt-1 text-whiteFixed font-medium ">
                {reduceName}
              </p>
              <p className="text-base h-fit ">{user.name}</p>
            </div>
          )}
        </div>
        <div className="md:hidden flex" onClick={() => setOpen(!open)}>
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </header>
  );
};
