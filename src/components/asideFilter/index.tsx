import React from "react";

export const AsideFilter: React.FC = () => {
  return (
    <>
      <aside className="flex flex-col max-w-xs select-text ml-4">
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">Marca</div>
          <ul>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                General Motors
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Fiat
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Ford
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Honda
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Porsche
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Volswagen
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">Modelo</div>
          <ul className="select-text inline">
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Civic
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Corolla
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Cruze
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Fit
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Gol
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="font-lexend font-semibold text-2xl my-8">Cor</div>
          <ul>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Azul
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Branca
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Cinza
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Prata
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Preta
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Verde
              </span>
            </li>
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
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Diesel
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Etanol
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Gasolina
              </span>
            </li>
            <li>
              <span className="cursor-pointer font-lexend font-medium text-lg text-grey3">
                Flex
              </span>
            </li>
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
