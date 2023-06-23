import { Button } from "@/components/button/button";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Input } from "@/components/input/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "@/services/api";
import { IUserLogin } from "@/interfaces";
import { useRouter } from "next/router";

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
      route.push("/");
      console.log(data.token);
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
          <span className=" text-base font-medium text-end text-grey2 cursor-pointer">
            Esqueci minha senha
          </span>
        </div>

        <Button
          type="submit"
          text="Entrar"
          className="p-2 bg-brand1 text-grey10 font-semibold rounded h-12"
        />
        <h2 className="text-sm font-normal text-center text-grey2">
          Ainda não possui conta ?
        </h2>
        <Button
          type="button"
          text="Cadastrar"
          className="p-2 border-2 border-grey4 text-grey0 font-semibold rounded h-12"
        />
      </form>
      <Footer />
    </div>
  );
};

export default Login;
