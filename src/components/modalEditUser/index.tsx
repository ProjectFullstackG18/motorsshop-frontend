/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/button/button";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Input } from "@/components/input/input";
import { Textarea } from "@/components/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "@/services/api";
import { ModalM } from "@/components/modal/modal";
import { useRouter } from "next/router";

const ModalEditUser: React.FC = () => {
  const [modalEditSuccess, setModalEditSuccess] = useState(true);
  const [modalDeleteSuccess, setModalDeleteSuccess] = useState(false);
  const route = useRouter();

  const registerSchena = yup.object().shape({
    name: yup
      .string()
      .required("Informe seu nome")
      .min(8, "Insira pelo menos um nome e um sobrenome")
      .max(
        60,
        "O nome é limitado a 60 caracteres, por favor abrevie ou remova algum sobrenome."
      ),
    email: yup
      .string()
      .required("Informe seu email")
      .email("Email invalido")
      .max(30, "Limite de 30 caracteres para email"),
    cpf: yup
      .string()
      .required("Informe seu CPF")
      .length(11, "CPF deve conter exatamente 11 digitos"),
    phone: yup
      .string()
      .required("Informe seu celular")
      .length(11, "Celular deve conter exatamente 11 digitos"),
    birthdate: yup
      .string()
      .required("Informe sua data de nascimento")
      .length(
        10,
        "Sua data de nascimento deve conter exatamente 6 digitos no formado DDMMAA"
      ),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<any>({
    mode: "onBlur",
    resolver: yupResolver(registerSchena),
  });

  const handleEditUser = async (data: any) => {
    try {
      const { data: apiData } = await api.post("users", data);
      setModalEditSuccess(false);
    } catch (e: any) {
      console.log(e.response);
    }
  };
  const modalDeleteOpen = () => {
    setModalEditSuccess(false);
    setModalDeleteSuccess(true);
  };
  const handleDeleteUser = async () => {
    try {
      const { data: apiData } = await api.delete("users");
      setModalDeleteSuccess(false);
      route.push("/login");
    } catch (e: any) {
      console.log(e.response);
    }
  };

  return (
    <div className="bg-grey8 w-screen">
      <ModalM
        isOpen={modalEditSuccess}
        setIsOpen={setModalEditSuccess}
        titleModal="Editar Perfil"
        className="max-w-[94vw] bg-grey10"
      >
        <h2 className="text-sm font-medium text-grey0">Informações pessoais</h2>
        <form
          onSubmit={handleSubmit(handleEditUser)}
          className="w-auto flex rounded flex-col min-h-1 gap-7"
        >
          <Input
            labelName="Nome"
            placeholder="Ex: Flavin do Pneu"
            labelText="Nome"
            type="text"
            register={register("name")}
            classInput=""
          />
          {errors?.name && (
            <span className="text-brand1 text-xs -mt-6">
              {String(errors.name.message)}
            </span>
          )}

          <Input
            labelName="Email"
            placeholder="Ex: flavin@pneu.com"
            labelText="Email"
            type="email"
            register={register("email")}
          />
          {errors?.email && (
            <span className="text-brand1 text-xs -mt-6">
              {String(errors.email.message)}
            </span>
          )}
          <Input
            labelName="CPF"
            placeholder="000.000.000-00"
            labelText="CPF"
            type="number"
            register={register("cpf")}
          />
          {errors?.cpf && (
            <span className="text-brand1 text-xs -mt-6">
              {String(errors.cpf.message)}
            </span>
          )}
          <Input
            labelName="Celular"
            placeholder="(DD) 90000-0000"
            labelText="Celular"
            type="number"
            register={register("phone")}
          />
          {errors?.phone && (
            <span className="text-brand1 text-xs -mt-6">
              {String(errors.phone.message)}
            </span>
          )}
          <Input
            labelName="nascimento"
            placeholder="00/00/0000"
            labelText="Data de nascimento"
            type="date"
            register={register("birthdate")}
          />
          {errors?.birthdate && (
            <span className="text-brand1 text-xs -mt-6">
              {String(errors.birthdate.message)}
            </span>
          )}
          <Textarea
            labelName="descricao"
            labelText="Descrição"
            placeholder="Digitar descrição"
            register={register("description")}
          />
          {errors?.description && (
            <span className="text-brand1 text-xs -mt-6">
              {String(errors.description.message)}
            </span>
          )}
          <div className="flex space-x-2 flex-wrap justify-center  sm:flex-wrap md:flex-nowrap lg:flex-wrap xl:flex-nowrap">
            <div className="flex gap-2">
              <Button
                type="button"
                callback={() => setModalEditSuccess(false)}
                text="Cancelar"
                className="p-2 text-center w-36  font-semibold text-sm rounded bg-grey6 text-grey2"
              />
              <Button
                type="button"
                text="Excluir perfil"
                callback={() => modalDeleteOpen()}
                className="p-2 text-center w-36  font-semibold text-sm rounded bg-alert2 text-alert1"
              />
            </div>
            <Button
              type="submit"
              text="Salvar alterações"
              className="p-2 text-center w-36 mt-3  sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 font-semibold text-sm rounded bg-brand1 text-grey10"
              disable={!isDirty || !isValid}
            />
          </div>
        </form>
      </ModalM>
      <ModalM
        isOpen={modalDeleteSuccess}
        setIsOpen={setModalDeleteSuccess}
        titleModal="Excluir usuario"
        className="max-w-[94vw] bg-grey10"
      >
        <h2 className="font-semibold text-grey0 font-lexend text-base">
          Tem certeza que deseja remover seu usuario ?
        </h2>

        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </p>
        <div className="flex justify-end gap-x-2.5">
          <Button
            type="button"
            text="Cancelar"
            callback={() => setModalDeleteSuccess(false)}
            className="p-2 text-center w-32 font-semibold text-sm rounded bg-grey6 text-grey2 "
          />
          <Button
            type="submit"
            text="Sim, excluir usuario"
            callback={() => handleDeleteUser()}
            className="p-2 text-center w-40 font-semibold text-sm rounded bg-alert2 text-alert1"
          />
        </div>
      </ModalM>
    </div>
  );
};

export default ModalEditUser;
