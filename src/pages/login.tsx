import { Button } from "@/components/button/button";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Input } from "@/components/input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "@/services/api";
import Link from "next/link";
import { IUserLogin } from "@/interfaces";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const route = useRouter();
  const loginSchena = yup.object().shape({
    email: yup.string().required("Informe seu email").email("Email invalido"),
    password: yup
      .string()
      .required("Informe sua senha")
      .min(6, "Insira pelo menos 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(loginSchena),
  });

  const handleLogin = async (dataLogin: IUserLogin) => {
    try {
      const { data } = await api.post("login", dataLogin);
      localStorage.setItem("motorshop@token", data.token);
      toast.success("Login realizado com sucesso!");

      setTimeout(() => {
        route.push("/");
      }, 3000);
    } catch (e: any) {
      toast.error("Usuário não encontrado!");
    }
  };

  return (
    <div className="bg-grey8 w-screen">
      <Header />
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-grey10 m-auto max-w-[92vw] my-32 mb-32 w-96 flex rounded flex-col min-h-1 p-4 gap-7"
      >
        <h1 className="text-2xl font-medium">Login</h1>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <Input
            placeholder="Digitar email"
            type="email"
            register={register("email")}
          />
        </div>
        {errors?.email && (
          <span className="text-brand1 text-xs -mt-6">
            {String(errors.email.message)}
          </span>
        )}

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
        <div className="text-end">
          <Link
            href={"/resetPassword"}
            className=" text-base font-medium text-end text-grey2 cursor-pointer"
          >
            Esqueci minha senha
          </Link>
        </div>

        <Button
          type="submit"
          text="Entrar"
          className="p-2 bg-brand1 text-grey10 font-semibold rounded h-12"
        />
        <h2 className="text-sm font-normal text-center text-grey2">
          Ainda não possui conta ?
        </h2>
        <Link
          className="border-2 border-grey6 rounded h-12 font-semibold text-center pt-[10px]"
          href={"/register"}
        >
          Cadastrar
        </Link>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
