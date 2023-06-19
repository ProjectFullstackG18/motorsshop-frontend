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
import Link from "next/link";
import { ModalM } from "@/components/modal/modal";

const Register: React.FC = () => {
  const [isSaller, setIsSaller] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalNewCar, setModalNewCar] = useState(true);

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
    cep: yup
      .string()
      .required("Informe seu cep")
      .length(8, "Cep deve conter exatamente 8 digitos (XXXXX-XXX)"),
    estate: yup
      .string()
      .required("Informe seu estado")
      .matches(
        /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/,
        "Por favor, informe um estado válido."
      ),
    city: yup
      .string()
      .required("Informe sua cidade")
      .max(30, "Cidades são limitadas a 30 caracteres"),

    street: yup
      .string()
      .required("Informe sua rua")
      .max(30, "Ruas são limitadas a 30 caracteres"),
    number: yup
      .string()
      .required("Informe o numero")
      .max(8, "Numeros são limitados a 10 caracteres"),
    complement: yup.string(),

    password: yup
      .string()
      .required("Informe sua senha")
      .min(8, "Insira pelo menos 8 caracteres"),
    passwordConfirmation: yup
      .string()
      .required("Repita sua senha")
      .oneOf([yup.ref("password")], "A senhas deve ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<any>({
    mode: "onBlur",
    resolver: yupResolver(registerSchena),
  });

  const handleRegister = async (data: any) => {
    data.seller = isSaller;
    try {
      const { data: apiData } = await api.post("users", data);
      setModalSuccess(true);
    } catch (e: any) {
      console.log(e.response);
    }
  };

  return (
    <div className="bg-grey8 w-screen">
      <Header>
        <Button text="Fazer Login" type="button" />
        <Button
          text="Cadastrar"
          type="button"
          className="border-2 border-grey6 rounded w-36 h-10 font-semibold"
        />
      </Header>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-grey10 m-auto max-w-[92vw] my-8 mb-8 w-96 flex rounded flex-col min-h-1 p-4 gap-7"
      >
        <h1 className="text-2xl font-medium">Cadastro</h1>
        <h2 className="text-sm font-medium">Informações pessoais</h2>
        <Input
          labelName="Nome"
          placeholder="Ex: Flavin do Pneu"
          labelText="Nome"
          type="text"
          register={register("name")}
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

        <h2 className="text-sm font-medium">Informações de endereço</h2>

        <Input
          labelName="CEP"
          placeholder="00000-000"
          labelText="CEP"
          type="text"
          register={register("cep")}
        />
        {errors?.cep && (
          <span className="text-brand1 text-xs -mt-6">
            {"* " + String(errors.cep.message)}
          </span>
        )}
        <div className="flex flex-row gap-2 justify-between w-full">
          <div className="flex flex-col  gap-7 w-[48%]">
            <Input
              labelName="Estado"
              placeholder="Digitar Estado"
              labelText="Estado"
              type="text"
              register={register("estate")}
            />
            {errors?.estate && (
              <span className="text-brand1 text-xs -mt-6">
                {"* " + String(errors.estate.message)}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-7 w-[48%]">
            <Input
              labelName="Cidade"
              placeholder="Digitar Cidade"
              labelText="Cidade"
              type="text"
              register={register("city")}
            />
            {errors?.city && (
              <span className="text-brand1 text-xs -mt-6">
                {String(errors.city.message)}
              </span>
            )}
          </div>
        </div>
        <Input
          labelName="Rua"
          placeholder="Digitar Rua"
          labelText="Rua"
          type="text"
          register={register("street")}
        />
        {errors?.street && <span>{String(errors.street.message)}</span>}
        <div className="flex flex-row gap-2 justify-between w-full">
          <div className="flex flex-col  gap-7 w-[48%]">
            <Input
              labelName="numero"
              placeholder="Digitar número"
              labelText="Número"
              type="text"
              register={register("number")}
            />
            {errors?.number && (
              <span className="text-brand1 text-xs -mt-6">
                {String(errors.number.message)}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-7 w-[48%]">
            <Input
              labelName="Complemento"
              placeholder="Ex: apart 307"
              labelText="Complemento"
              type="text"
              register={register("complement")}
            />
            {errors?.complement && (
              <span className="text-brand1 text-xs -mt-6">
                {String(errors.complement.message)}
              </span>
            )}
          </div>
        </div>

        <h2 className="text-sm font-medium">Tipo de conta</h2>
        <div className="flex flex-row gap-2 justify-between w-full">
          <button
            type="button"
            onClick={() => setIsSaller(false)}
            className={
              isSaller
                ? "p-2 w-[48%] text-center  font-semibold rounded border-2 border-grey6"
                : " p-2 w-[48%] text-center  font-semibold rounded bg-brand1 text-grey10 "
            }
          >
            Comprador
          </button>

          <button
            type="button"
            onClick={() => setIsSaller(true)}
            className={
              !isSaller
                ? "p-2 w-[48%] text-center  font-semibold rounded border-2 border-grey6"
                : " p-2 w-[48%] text-center  font-semibold rounded bg-brand1 text-grey10 "
            }
          >
            Anunciante
          </button>
        </div>

        <Input
          labelName="senha"
          placeholder="Digitar senha"
          labelText="Senha"
          type="password"
          register={register("password")}
        />
        {errors?.password && (
          <span className="text-brand1 text-xs -mt-6">
            {String(errors.password.message)}
          </span>
        )}
        <Input
          labelName="confirmacaoSenha"
          placeholder="Digitar senha"
          labelText="Confirmar Senha"
          type="password"
          register={register("passwordConfirmation")}
        />
        {errors?.passwordConfirmation && (
          <span className="text-brand1 text-xs -mt-6">
            {String(errors.passwordConfirmation.message)}
          </span>
        )}

        <Button
          type="submit"
          text="Finalizar cadastro"
          className="p-2 bg-brand1 text-grey10 font-semibold rounded h-12"
          disable={!isDirty || !isValid}
        />
      </form>
      <Footer />

      <ModalM
        isOpen={modalSuccess}
        setIsOpen={setModalSuccess}
        titleModal="Sucesso!"
        className="max-w-[94vw]"
      >
        <h2 className="font-semibold mt-6">
          Sua conta foi criada com sucesso!
        </h2>

        <p className="font-extralight text-grey2">
          Agora você poderá ver seus negócios crescendo em grande escala
        </p>
        <Link
          href="/login"
          className="p-2 text-center w-32  font-semibold text-sm rounded bg-brand1 text-grey10"
        >
          Ir para o login
        </Link>
      </ModalM>
    </div>
  );
};

export default Register;
