/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";
import Image from "next/image";
import car_image from "../img/134-1345584_mercedes-benz-s-class-car-png-image-mercedes.png";
import { ICar, IUser } from "@/interfaces";
import { MdAttachMoney } from "react-icons/md";
import Link from "next/link";

interface IPropsCard {
  car: ICar;
  user: IUser;
}

export const CardProduct = ({ car, user }: IPropsCard) => {
  return (
    <li>
      <Link
        href={`/produto/${car.id}`}
        className="flex flex-col relative gap-4"
      >
        {Number(car.price) < Number(car.fipe_price) * 0.9 && (
          <span className="bg-sucess1 py-1 absolute top-0 right-0 z-10">
            <MdAttachMoney size={24} color="#fff" />
          </span>
        )}
        <figure className="h-44 overflow-hidden flex align-middle ">
          <img
            src={car.images[0].URL}
            className="p-2 bg-grey6 w-full h-max"
            alt="car_image"
          />
        </figure>
        <h2 className="font-semibold ">
          {car.brand.toUpperCase()} - {car.model.toUpperCase()}
        </h2>
        <h3 className="normal font-normal text-grey2 line-clamp-3 ">
          {car.description}
        </h3>
        <div className="flex flex-row gap-2">
          <h4 className="w-8 h-8  rounded-full text-center pt-1 bg-brand1 text-whiteFixed ">
            {user.name[0].toLocaleUpperCase()}
          </h4>
          <h4 className="h-8 pt-1 text-grey2 ">
            {user.name[0].toLocaleUpperCase() + user.name.substring(1)}
          </h4>
        </div>
        <div className="flex gap-2">
          <h2 className="bg-brand4 text-sm p-2 h-fit text-brand2 rounded">
            {car.km} KM
          </h2>
          <h2 className="bg-brand4 text-sm p-2 h-fit text-brand2 rounded">
            {car.year}
          </h2>

          <h3 className="ml-auto p-2">
            {Number(car.price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
        </div>
      </Link>
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
