import { ICarRetrieve } from "@/interfaces";
import { api } from "@/services/api";
import React, { useEffect, useState } from "react";

export const AsideFilter: React.FC = ({ setCars }: ICarRetrieve[]) => {
  const [info, setInfo] = useState([] as any);
  const [isLoading, setIsLoading] = useState(true);
  const [valueClick, setValueClick] = useState({} as any);

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
  }, [valueClick]);

  if (isLoading) return null;

  return (
    <>
      <aside className="flex flex-col max-md:hidden max-w-xs select-text ml-4">
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">Marca</div>
          <ul>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                General Motors
              </span>
            </li>
            {info.brands.map((inf: any) => {
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
            {info.models.map((inf: any) => {
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
            {info.colors.map((inf: any) => {
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
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                2022
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                2021
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                2018
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                2015
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                2013
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                2012
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                2010
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">
            Combustivel
          </div>
          <ul>
            {info.fuel_types.map((inf: any) => {
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
            />
            <input
              className=" text-center w-24 h-10 bg-grey5"
              type="number"
              placeholder="Máxima"
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
            />
            <input
              className=" text-center w-24 h-10 bg-grey5"
              type="number"
              placeholder="Máxima"
            />
          </div>
        </div>
      </aside>
    </>
  );
};
