/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";
import Image from "next/image";
import car_image from "../img/134-1345584_mercedes-benz-s-class-car-png-image-mercedes.png";
import { ICar, IUser } from "@/interfaces";
import { MdAttachMoney } from "react-icons/md";
import Link from "next/link";
import { Button } from "../button/button";

interface IPropsCard {
  car: ICar;
  user: IUser;
  children?: ReactNode;
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

export const CardProductSeler = ({ car, user, children }: IPropsCard) => {
  return (
    <li>
      <Link
        href={`/produto/${car.id}`}
        className="flex flex-col relative gap-4"
      >
        {car.is_active ? (
          <p className="absolute left-2 top-2 bg-brand2 text-whiteFixed font-medium p-1 px-3">
            Ativo
          </p>
        ) : (
          <p className="absolute left-2 top-2 bg-grey3 text-whiteFixed font-medium p-1 px-3">
            Inativo
          </p>
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
      {children && children}
    </li>
  );
};
