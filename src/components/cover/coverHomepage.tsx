import React, { ReactNode } from "react";
import Image from "next/image";
import cover_image from "../img/cover-1.png";
export const DashboardCover = () => {
  return (
    <div className="flex flex-col relative bg-gradient-to-tr from-grey1 w-1598px h-544px gap-69px">
      <div>
        <figure className="w-full h-full max-md:h-72 min-w-970px max-w-1080px mix-blend-darken ">
          <Image className="max-md:h-60 m-auto"  src={cover_image} alt="" />
        </figure>
        <div className="absolute flex flex-col top-2/4 w-full items-center text-center order-none">
          <h1 className="text-grey10 text-center font-Lexend not-italic font-bold text-2xl md:text-4xl">
            Motors Shop
          </h1>
          <h2 className="text-grey10 font-Lexend not-italic font-medium text-2xl md:text-4xl">
            A melhor plataforma de anúncios de carros do país
          </h2>
        </div>
      </div>
    </div>
  );
};

{/* <div className="absolute flex flex-col top-2/4 inline items-center text-center order-none flex-grow-0 left-96 mr-80"></div> */}