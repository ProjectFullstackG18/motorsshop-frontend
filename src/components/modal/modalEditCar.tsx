/* eslint-disable @next/next/no-img-element */

import { ICar } from "@/interfaces";
import { apiCars, api } from "@/services/api";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import * as yup from "yup";
import { Button } from "../button/button";
import { Select } from "../select";
import { Textarea } from "../textarea";
import { ModalM } from "./modal";
import { Input } from "../input/input";

interface IModalEditCarProps {
  modalEditCar: boolean;
  setModalEditCar: React.Dispatch<React.SetStateAction<boolean>>;
  currentCar: ICar;
  setCurrentCar?: React.Dispatch<React.SetStateAction<ICar>>;
}

export const ModalEditCar: React.FC<IModalEditCarProps> = ({
  modalEditCar,
  setModalEditCar,
  currentCar,
  setCurrentCar,
}) => {
  const [isActive, setIsActive] = useState(true);
  const [selectedModel, setSelectedModel] = useState(" ");
  const [carBrands, setCarBrands] = useState<string[]>([]);
  const [carBrandModels, setCarBrandModels] = useState([]);
  const [currentModel, setCurrentModel] = useState({} as any);
  const [isLoading, setIsLoading] = useState(true);

  const [brandChange, setbrandChange] = useState<boolean>(false);

  const [modalDelete, setModalDelete] = useState(false);

  const fuelOptions = ["Flex", "Hibrido", "Eletrico"];

  const getCarBrands = async () => {
    try {
      const { data } = await apiCars.get("cars");
      const brands = Object.keys(data);
      setCarBrands(brands);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar as marcas de carro:", error);
    }
  };

  useEffect(() => {
    getCarBrands();
  }, []);

  useEffect(() => {
    setbrandChange(false);
  }, [modalEditCar]);

  useEffect(() => {
    const prepareDataForModal = async () => {
      try {
        const { data } = await apiCars.get(`cars?brand=${currentCar.brand}`);
        setCarBrandModels(data);

        const currentModelObj = data.find((model: any) => {
          return model.name == currentCar.model;
        });
        setCurrentModel(currentModelObj);
        setSelectedModel(currentCar.model);
      } catch (error) {
        console.error("Erro ao buscar os modelos de carro:", error);
      }
    };
    prepareDataForModal();
  }, [currentCar.brand, currentCar.model, modalEditCar]);

  const setCurrentModelFunction = (name: string) => {
    const currentModelObj = carBrandModels.find((model: any) => {
      return model.name == name;
    });
    setCurrentModel(currentModelObj);
  };

  const getCarBrandModels = async (brand: string) => {
    setCurrentModel({});
    setbrandChange(true);
    if (brand) {
      setCurrentModel({});
      try {
        const { data } = await apiCars.get(`cars?brand=${brand}`);

        setCarBrandModels(data);
      } catch (error) {
        console.error("Erro ao buscar os modelos de carro:", error);
      }
    } else {
      setCarBrandModels([]);
    }
  };

  // NOT WORKING

  const carUpdateSchema = yup.object().shape({
    brand: yup.string().required("Selecione a marca"),
    model: yup.string().required("Selecione o modelo"),
    year: yup.string().required("Informe o ano do veiculo"),
    fuel_type: yup.string().required("Informe o tipo de combustivel"),
    km: yup
      .string()
      .required("Informe a quilometragem do veiculo")
      .max(10, "Informe a quilometragem do veiculo"),
    color: yup
      .string()
      .required("Informe a cor do veiculo")
      .max(60, "Limitado a 60 caracteres"),
    fipe_price: yup
      .string()
      .required("Informe o preço da tabela fipe do veiculo"),
    price: yup
      .string()
      .required("Informe o preço")
      .max(60, "Limitado a 60 caracteres"),
    description: yup
      .string()
      .min(20, "Escreva um pouco mais")
      .required(
        "Adicione alguma descrição que os compradores possam achar interessante. Ex: Unico dono"
      ),
    images: yup
      .array()
      .of(
        yup.string().url("Insira uma url valida").required("Campo obrigatório")
      ),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm<any>({
    mode: "onSubmit",
    resolver: yupResolver(carUpdateSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const handleUpdateCar = async (data: any) => {
    data.is_active = isActive;
    try {
      const { data: apiData } = await api.put(`cars/${currentCar.id}`, data);
      setModalEditCar(false);
    } catch (e: any) {
      console.log(e);
    }
  };

  const handleDeleteCar = async () => {
    try {
      await api.delete(`cars/${currentCar.id}`);
      setModalEditCar(false);
    } catch (e: any) {
      console.log(e);
    }
  };

  const addFieldsImages = (carToEdit: any) => {
    reset({ images: [] });

    carToEdit.images.forEach((image: { id: string; URL: string }) => {
      append(image.URL);
    });
  };

  useEffect(() => {
    if (currentCar.id) {
      addFieldsImages(currentCar);
      setValue("year", currentCar.year);
      setValue("fuel_type", currentCar.fuel_type);
      setValue("fipe_price", currentCar.fipe_price);
      setValue("model", currentCar.model);
    }
  }, [currentCar]);

  if (isLoading) return null;

  if (modalDelete) {
    return (
      <ModalM
        isOpen={modalEditCar}
        setIsOpen={setModalEditCar}
        titleModal="Excluir anuncio"
        className="max-w-[94vw] w-[500px]"
      >
        <div className="flex gap-4 flex-col">
          <p className="font-semibold">
            Tem certeza que deseja remover este anuncio?
          </p>
          <p className="text-grey2">
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            text="Cancelar"
            type="button"
            callback={() => setModalDelete(false)}
            className="ml-auto p-2 px-4 bg-grey5 text-grey2 w-fit font-semibold rounded h-12 "
          />
          <Button
            text="Sim, excluir anúncio"
            type="button"
            callback={() => handleDeleteCar()}
            className="p-2 px-4 bg-alert2 text-alert1 w-fit font-semibold rounded h-12 "
          />
        </div>
      </ModalM>
    );
  }

  return (
    <ModalM
      isOpen={modalEditCar}
      setIsOpen={setModalEditCar}
      titleModal="Editar anuncio"
      className="max-w-[94vw] w-[500px]"
    >
      <form
        onSubmit={handleSubmit(handleUpdateCar)}
        className="bg-grey11 m-auto my-8 mb-8 -mt-4 pt-4 flex w-full rounded flex-col min-h-1 gap-7"
      >
        <h2 className="text-sm font-medium">Informações do Veiculo</h2>
        <Select
          labelName="marca"
          labelText="Marca"
          placeholder="Selecione uma opção"
          defaultValue={currentCar.brand}
          onChange={(e) => getCarBrandModels(e.target.value)}
          register={register("brand")}
        >
          {carBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </Select>
        {errors?.brand && (
          <span className="text-brand1 text-xs -mt-6">
            {String(errors.brand.message)}
          </span>
        )}

        <Select
          labelName="modelo"
          labelText="Modelo"
          placeholder="Selecione uma opção"
          defaultValue={currentCar.model}
          register={register("model")}
          onChange={(e) => setCurrentModelFunction(e.target.value)}
        >
          <>
            {brandChange ? null : (
              <option key={currentCar.id} value={currentCar.model}>
                {currentCar.model}
              </option>
            )}
            {!isLoading &&
              carBrandModels.map((car: { id: string; name: string }) => (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              ))}
          </>
        </Select>

        {errors?.model && (
          <span className="text-brand1 text-xs -mt-6">
            {String(errors.model.message)}
          </span>
        )}
        <div className="flex flex-row gap-2 justify-between w-full">
          <div className="flex flex-col  gap-7 w-[48%]">
            <Input
              labelName="ano"
              placeholder="2020"
              labelText="Ano"
              type="number"
              register={register("year")}
            />
            {errors?.year && (
              <span className="text-brand1 text-xs -mt-6">
                {String(errors.year.message)}
              </span>
            )}
          </div>
          <div className="flex flex-col  gap-7 w-[48%]">
            <Input
              labelName="Combustivel"
              placeholder="Gasolina / Etanol / Eletrico"
              labelText="Combustivel"
              type="text"
              register={register("fuel_type")}
            />
            {errors?.fuel_type && (
              <span className="text-brand1 text-xs -mt-6">
                {String(errors.fuel_type.message)}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-between w-full">
          <div className="flex flex-col  gap-7 w-[48%]">
            <Input
              labelName="quilometragem"
              placeholder="20.000"
              labelText="Quilometragem"
              type="number"
              defaultValue={currentCar.km}
              register={register("km")}
            />
            {errors?.km && (
              <span className="text-brand1 text-xs -mt-6">
                {String(errors.km.message)}
              </span>
            )}
          </div>
          <div className="flex flex-col  gap-7 w-[48%]">
            <Input
              labelName="cor"
              placeholder="Cor"
              labelText="Cor"
              type="text"
              defaultValue={currentCar.color}
              register={register("color")}
            />
            {errors?.color && (
              <span className="text-brand1 text-xs -mt-6">
                {String(errors.color.message)}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-between w-full">
          <div className="flex flex-col  gap-7 w-[48%]">
            <Input
              labelName="fipe"
              placeholder="R$ 50.000,00"
              labelText="Preço tabela FIPE"
              type="text"
              register={register("fipe_price")}
              value={currentModel?.value}
            />
            {errors?.fipe_price && (
              <span className="text-brand1 text-xs -mt-6">
                {String(errors.fipe_price.message)}
              </span>
            )}
          </div>
          <div className="flex flex-col  gap-7 w-[48%]">
            <Input
              labelName="preco"
              placeholder="R$ 48.000,00"
              labelText="Preço"
              type="number"
              register={register("price")}
              defaultValue={currentCar.price}
            />
            {errors?.price && (
              <span className="text-brand1 text-xs -mt-6">
                {String(errors.price.message)}
              </span>
            )}
          </div>
        </div>
        <Textarea
          labelName="descricao"
          labelText="Descrição"
          placeholder="Digitar descrição"
          register={register("description")}
          defaultValue={currentCar.description}
        />
        {errors?.description && (
          <span className="text-brand1 text-xs -mt-6">
            {String(errors.description.message)}
          </span>
        )}
        <h2 className="text-sm font-medium -mb-6 ">Publicado</h2>
        <div className="flex flex-row gap-2 justify-between w-full">
          <button
            type="button"
            onClick={() => setIsActive(true)}
            className={
              !isActive
                ? "p-2 w-[48%] text-center  font-semibold rounded border-2 border-grey6"
                : " p-2 w-[48%] text-center  font-semibold rounded bg-brand1 text-grey10 "
            }
          >
            Sim
          </button>

          <button
            type="button"
            onClick={() => setIsActive(false)}
            className={
              isActive
                ? "p-2 w-[48%] text-center  font-semibold rounded border-2 border-grey6"
                : " p-2 w-[48%] text-center  font-semibold rounded bg-brand1 text-grey10 "
            }
          >
            Não
          </button>
        </div>
        {fields.map((field: any, index) => {
          return (
            <div className="flex w-full relative" key={index}>
              <div className="flex flex-col gap-8 w-full">
                <Input
                  labelName={`imagem${index}`}
                  placeholder="https://image.com"
                  labelText={
                    index == 0 ? "Image da Capa" : `${index}º imagem da galeria`
                  }
                  type="text"
                  register={register(`images.${index}`)}
                />
                {errors.images && (errors.images as any)[index] && (
                  <span className="text-brand1 text-xs -mt-6">
                    {"* " + (errors.images as any)[index].message}
                  </span>
                )}
              </div>
              {index == fields.length - 1 && index > 2 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="border-none absolute bg-brand4 rounded right-2 bottom-3"
                >
                  <IoMdClose color="#5126EA" size={24} />
                </button>
              )}
            </div>
          );
        })}
        <div className="flex flex-row gap-2 w-full">
          <Button
            className="bg-brand4 text-xs p-2 px-4 w-1/2 rounded text-brand1 font-semibold"
            text="Adicionar campo para imagem"
            type="button"
            callback={() => append("")}
          />
        </div>
        <div className="flex justify-between gap-3 ">
          <Button
            type="button"
            text="Exluir Anuncio"
            className="p-2 bg-grey5 text-grey2 w-full font-semibold rounded h-12"
            disable={false}
            callback={() => setModalDelete(true)}
          />
          <Button
            type="submit"
            text="Salvar alterações"
            className="p-2 bg-brand1 text-grey10 min-w-fit px-6 font-semibold rounded h-12"
            disable={false}
          />
        </div>
      </form>
    </ModalM>
  );
};
