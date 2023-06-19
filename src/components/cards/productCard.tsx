import React, { ReactNode } from "react";
import Image from "next/image";
import car_image from "../img/134-1345584_mercedes-benz-s-class-car-png-image-mercedes.png";
import { Button } from "../button/button";

export const CardProduct = () => {
  return (
    <li className="min-w-312px max-w-312px h-370px flex flex-col pt-10px">
      <figure className="h-152px flex flex-row-reverse m-0-auto relative">
        <Image src={car_image} alt="car_image" />
      </figure>
      <h2 className="font-medium inter flex flex-row justify-center	items-center px4-px8 w-600px h-24px rounded-4px flex-none order-none flex-grow-0">
        {" "}
        Mercedes-Benz - EQ2
      </h2>
      <h3 className="w-400px h-24px normal font-medium ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem...
      </h3>
      <div className="flex flex-row items-center gap-10px">
        <h4 className="w-500px h-24 text-14px ">João Vitor Meira</h4>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex gap-3 items-center">
          <h2 className="p-1 px-2 h-fit bg-brand4 rounded text-brand1 text-sm font-medium">
            0 KM
          </h2>
          <h2 className="p-1 px-2 h-fit bg-brand4 rounded text-brand1 text-sm font-medium">
            2019
          </h2>
        </div>
        <h3 className="w-105px h-20px normal font-medium ">R$ 112.077,00</h3>
      </div>
    </li>
  );
};

export const CardProductSeller = () => {
  return (
    <li className="min-w-312px max-w-312px h-370px flex flex-col pt-10px">
      <figure className="h-152px flex flex-row-reverse m-0-auto relative">
        <Image src={car_image} alt="car_image" />
      </figure>
      <h2 className="font-medium inter flex flex-row justify-center	items-center px4-px8 w-600px h-24px rounded-4px flex-none order-none flex-grow-0">
        {" "}
        Mercedes-Benz - EQ2
      </h2>
      <h3 className="w-400px h-24px normal font-medium ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem...
      </h3>
      <div className="flex flex-row items-center gap-10px">
        <h4 className="w-500px h-24 text-14px ">João Vitor Meira</h4>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex gap-3 items-center">
          <h2 className="p-1 px-2 h-fit bg-brand4 rounded text-brand1 text-sm font-medium">
            0 KM
          </h2>
          <h2 className="p-1 px-2 h-fit bg-brand4 rounded text-brand1 text-sm font-medium">
            2019
          </h2>
        </div>
        <h3 className="w-105px h-20px normal font-medium ">R$ 112.077,00</h3>
      </div>
      <div className="flex gap-3 items-center">
        <Button
          text="Editar"
          type="button"
          className={
            "text-grey1 w-32 rounded p-1 bg-grey8 border-grey1 border-2"
          }
        ></Button>
        <Button
          text="Ver detalhes"
          type="button"
          className={
            "text-grey1 w-32 rounded p-1 bg-grey8 border-grey1 border-2"
          }
        ></Button>
      </div>
    </li>
  );
};
