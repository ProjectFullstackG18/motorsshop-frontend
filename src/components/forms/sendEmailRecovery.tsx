import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { api } from "@/services/api";
import router from "next/router";
import { NextPage } from "next";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button/button";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import Toast from "../toast";

const sendEmailResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("Informe seu email"),
});

export type SendEmailResetPasswordData = Yup.InferType<
  typeof sendEmailResetPasswordSchema
>;

const SendEmailForm: NextPage = () => {
  const { register, handleSubmit } = useForm<SendEmailResetPasswordData>({
    resolver: yupResolver(sendEmailResetPasswordSchema),
  });

  const sendEmail = async (
    sendEmailResetPasswordData: SendEmailResetPasswordData
  ) => {
    await api
      .post("/users/resetPassword", sendEmailResetPasswordData)
      .then(() => {
        Toast({ message: "Email enviado com sucesso !", isSucess: true });
        console.log("email enviado com sucesso");
        router.push("/");
      })
      .catch((err) => {
        Toast({
          message: "Erro ao enviar o e-mail, tente novamente mais tarde",
        });
        console.log(err);
      });
  };

  const onFormSubmit = (formData: SendEmailResetPasswordData) => {
    console.log(formData);
    sendEmail(formData);
  };

  return (
    <div className="bg-grey8 w-full h-full">
      <Header />
      <form
        className="bg-grey10 m-auto max-w-[92vw] my-8 mb-8 w-96 flex rounded flex-col min-h-1 p-4 gap-7"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h1 className="text-2xl font-medium">Recuperação de Senha</h1>
        <h2>digite seu e-mail pra enviar o link de recuperação de senha</h2>
        <Input
          labelName="email"
          placeholder="example@.com"
          labelText="email"
          type="email"
          register={register("email")}
        />
        <Button
          type="submit"
          text="enviar"
          className="p-2 bg-brand1 text-grey10 font-semibold rounded h-12"
        />
      </form>
      <Footer />
    </div>
  );
};

export default SendEmailForm;
