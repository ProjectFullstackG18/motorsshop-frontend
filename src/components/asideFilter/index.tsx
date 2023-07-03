import { ICarRetrieve } from "@/interfaces";
import { api } from "@/services/api";
import React, { useEffect, useState } from "react";
import { Button } from "../button/button";

interface iInfoProps {
  brands: [];
  models: [];
  colors: [];
  years: [];
  fuel_types: [];
}

export const AsideFilter: React.FC = ({ setCars }: ICarRetrieve[] | any) => {
  const [info, setInfo] = useState<iInfoProps>({} as any);
  const [isLoading, setIsLoading] = useState(true);
  const [valueClick, setValueClick] = useState({} as string | number);

  useEffect(() => {
    const getFilter = async () => {
      try {
        const response = await api.get("filters");
        setInfo(response.data);
      } catch (e: any) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    getFilter();
  }, []);

  useEffect(() => {
    const getInfoFilter = async () => {
      try {
        const response = await api.get(`cars?${valueClick}`);
        setCars(response.data);
      } catch (e: any) {
        console.log(e);
      }
    };
    getInfoFilter();
  }, [setCars, valueClick]);

  if (isLoading) return null;

  return (
    <>
      <aside className="flex flex-col max-md:hidden max-w-xs select-text ml-4">
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">Marca</div>
          <ul>
            {info.brands.map((inf: string) => {
              return (
                <li key={inf}>
                  <button
                    onClick={() => setValueClick(`brand=${inf}`)}
                    className="cursor-pointer font-lexend font-medium text-lg text-grey3"
                  >
                    {inf}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">Modelo</div>
          <ul className="select-text inline">
            {info.models.map((inf: string) => {
              return (
                <li key={inf}>
                  <button
                    onClick={() => setValueClick(`model=${inf}`)}
                    className="cursor-pointer font-lexend font-medium text-lg text-grey3"
                  >
                    {inf}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">Cor</div>
          <ul>
            {info.colors.map((inf: string) => {
              return (
                <li key={inf}>
                  <button
                    onClick={() => setValueClick(`color=${inf}`)}
                    className="cursor-pointer font-lexend font-medium text-lg text-grey3"
                  >
                    {inf}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">Ano</div>
          <ul>
            {info.years.map((inf: string) => {
              return (
                <li key={inf}>
                  <button
                    onClick={() => setValueClick(`year=${inf}`)}
                    className="cursor-pointer font-lexend font-medium text-lg text-grey3"
                  >
                    {inf}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">
            Combustivel
          </div>
          <ul>
            {info.fuel_types.map((inf: string) => {
              return (
                <li key={inf}>
                  <button
                    onClick={() => setValueClick(`fuel_type=${inf}`)}
                    className="cursor-pointer font-lexend font-medium text-lg text-grey3"
                  >
                    {inf}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">Km</div>
          <div className="flex justify-between w-52">
            <input
              className=" text-center w-24 h-10 bg-grey5"
              type="number"
              placeholder="Mínima"
              onBlur={(e) => setValueClick(`min_km=${e.target.value}`)}
            />
            <input
              className=" text-center w-24 h-10 bg-grey5"
              type="number"
              placeholder="Máxima"
              onBlur={(e) => setValueClick(`max_km=${e.target.value}`)}
            />
          </div>
        </div>
        <div className="flex flex-col mb-14">
          <div className="font-lexend font-semibold text-2xl my-8">Preço</div>
          <div className="flex justify-between w-52">
            <input
              className=" text-center w-24 h-10 bg-grey5"
              type="number"
              placeholder="Mínima"
              onBlur={(e) => setValueClick(`min_price=${e.target.value}`)}
            />
            <input
              className=" text-center w-24 h-10 bg-grey5"
              type="number"
              placeholder="Máxima"
              onBlur={(e) => setValueClick(`max_price=${e.target.value}`)}
            />
          </div>
        </div>
        <Button
          type={"button"}
          text={"Limpar filtros"}
          className="w-full bg-brand2 text-grey10 h-12 rounded mb-8 font-semibold"
          callback={() => setValueClick("")}
        />
      </aside>
    </>
  );
};
