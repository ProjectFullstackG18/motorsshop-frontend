/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/button/button";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Input } from "@/components/input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "@/services/api";
import router from "next/router";
import Toast from "../toast";

interface ResetPasswordFormProps {
  token: string;
}

const resetPasswordSchema = yup.object().shape({
  password: yup.string().required("A senha é obrigatória"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas precisam corresponder")
    .required("A confirmação de senha é obrigatória"),
});

export type ResetPasswordData = yup.InferType<typeof resetPasswordSchema>;

const resetPassword = async (
  resetPasswordData: ResetPasswordData,
  resettoken: string
) => {
  await api
    .patch(`/users/resetPassword/${resettoken}`, {
      password: resetPasswordData.password,
    })
    .then(() => {
      Toast({ message: "Senha atualizada com sucesso !", isSucess: true });
      console.log("senha atualizada com sucesso!!");
      router.push("/login");
    })
    .catch((err) => {
      Toast({ message: "Erro ao atualizar a senha" });
      console.log(err);
    });
};

const RecoveryPasswordForm: React.FC<ResetPasswordFormProps> = ({ token }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onFormSubmit = (formData: ResetPasswordData) => {
    console.log(formData);
    console.log(token);
    resetPassword(formData, token);
  };

  return (
    <div className="bg-grey8 w-screen">
      <Header>
        <Button text="Login" type="button" />
        <Button
          text="Cadastrar"
          type="button"
          className="border-2 border-grey6 rounded w-36 h-10 font-semibold"
        />
      </Header>
      <form
        className="bg-grey10 m-auto max-w-[92vw] my-8 mb-8 w-96 flex rounded flex-col min-h-1 p-4 gap-7"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h1 className="text-2xl font-medium">Recuperação de Senha</h1>

        <Input
          labelName="senha"
          placeholder="Digitar Nova Senha"
          labelText="Nova Senha"
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
          placeholder="Confirmar Nova Senha"
          labelText="Confirmar nova Senha"
          type="password"
          register={register("passwordConfirm")}
        />
        {errors?.passwordConfirm && (
          <span className="text-brand1 text-xs -mt-6">
            {String(errors.passwordConfirm.message)}
          </span>
        )}

        <Button
          type="submit"
          text="recuperar senha"
          className="p-2 bg-brand1 text-grey10 font-semibold rounded h-12"
        />
      </form>
      <Footer />
    </div>
  );
};

export default RecoveryPasswordForm;
