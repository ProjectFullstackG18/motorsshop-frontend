import { Button } from "@/components/button/button";
import { CardProduct } from "@/components/cards/productCard";
import { Footer } from "@/components/footer/footer";
import { Gallery } from "@/components/gallery/gallery";
import { Header } from "@/components/header/header";
import { ICar, IUser, IUserAPI } from "@/interfaces";
import { api } from "@/services/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    const getData = async () => {
      if (id) {
        try {
          const { data: user }: { data: IUserAPI } = await api.get(
            `cars/seller/${id}`
          );
          const { cars, ...userData } = user;
          setCars(cars);
          setUser(userData);
        } catch (e) {
          console.log(e);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getData();
  }, []);

  if (isLoading) return <>carregando</>;

  return (
    <main className="bg-grey9">
      <Header>
        <Button text="Fazer Login" type="button" />
        <Button
          text="Cadastrar"
          type="button"
          className="border-2 border-grey6 rounded w-36 h-10 font-semibold"
        />
      </Header>
      <section className="bg-brand2 h-72"></section>
      <section className="bg-whiteFixed w-[76rem] max-w-[calc(100vw-2rem)] m-auto -mt-56 mb-12 gap-6 rounded p-11 flex flex-col">
        <span className="bg-brand1 text-whiteFixed font-medium rounded-full w-20 h-20 text-center align-middle pt-5 text-4xl ">
          {user.name[0].toLocaleUpperCase()}
        </span>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold ">
            {user.name[0].toUpperCase() + user.name.substring(1)}
          </h2>
          <h2 className="bg-brand4 text-sm p-1 h-fit w-fit text-brand2 font-medium rounded">
            {user.seller ? "Anunciante" : "Comprador"}
          </h2>
        </div>

        <p className="text-grey2 font-light text-base ">
          {user.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sed explicabo odio optio ipsam. Maiores provident quisquam,
          sequi nostrum unde optio minus nulla laboriosam doloremque asperiores
          distinctio placeat rem dolorum modi.
        </p>
      </section>

      <h2 className="w-[96rem] max-w-[100vw] m-auto font-semibold text-2xl mb-12">
        Anúncios
      </h2>
      <Gallery className="xl:grid-cols-4 w-[90rem]">
        {cars.map((car) => (
          <CardProduct key={car.id} car={car} user={user} />
        ))}
      </Gallery>

      <div className="md:hidden  flex gap-5 flex-col justify-center items-center">
        <Button
          text="Filtros"
          type="button"
          className="bg-brand2 w-[279px] h-[48px] rounded text-grey10 font-semibold"
        />
        <p className="text-grey3 font-bold">1 de 2</p>
        <p className="text-brand2 font-bold">Seguinte &gt; </p>
      </div>

      <Footer />
    </main>
  );
}
