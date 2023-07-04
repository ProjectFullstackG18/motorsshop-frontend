/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/button/button";
import { CommentCard } from "@/components/comment";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Subcontainer } from "@/components/subcontainer/subcontainer";
import { ICarRetrieve } from "@/interfaces";
import { api } from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductView: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [car, setCar] = useState<ICarRetrieve>({} as ICarRetrieve);
  // console.log(car.user.phone);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      if (id) {
        try {
          const { data: carAPI }: { data: ICarRetrieve } = await api.get(
            `cars/${id}`
          );
          setCar(carAPI);
        } catch (e) {
          console.log(e);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getData();
  }, [id]);

  if (isLoading) return null;

  return (
    <div className="bg-grey8">
      <Header />
      <div className="w-full h-[33rem] bg-brand2 absolute"></div>
      <main className="flex flex-wrap  w-[80rem]  max-w-[100vw] m-auto justify-between">
        <Subcontainer classname="w-screen z-10 lg:max-w-[68%] ">
          <div className="flex justify-center w-full bg-whiteFixed py-8 rounded">
            <img className="w-4/5" src={car.images[0].URL} alt="car" />
          </div>
          <div className="flex justify-center align-middle w-full flex-col gap-8 bg-whiteFixed p-6 rounded ">
            <h2 className="text-xl font-semibold">
              {car.brand.toUpperCase()} - {car.model.toUpperCase()}
            </h2>
            <div className="flex gap-3 items-center ">
              <span className="p-1 px-2 h-fit bg-brand4 rounded text-brand1 text-sm font-medium">
                {car.year}
              </span>

              <span className="p-1 px-2 h-fit bg-brand4 rounded text-brand1 text-sm font-medium">
                {car.km} KM
              </span>
              <span className="ml-auto p-2 text-base font-medium">
                {Number(car.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=55${
                car.user.phone
              }&text=O%20carro%20${car.brand.toUpperCase()}%20-%20${car.model.toUpperCase()}%20ainda%20está%20disponivel?`}
              target="_blank"
              className={
                "bg-brand1 w-32 rounded p-1 text-brand4 text-center font-semibold"
              }
            >
              Comprar
            </a>
          </div>
          <div className="flex justify-center w-full flex-col gap-8 bg-whiteFixed p-6 rounded">
            <h2 className="text-xl font-semibold">Descrição</h2>
            <p>{car.description}</p>
          </div>
        </Subcontainer>

        <Subcontainer classname="w-screen z-10 lg:max-w-[28%] ">
          <div className="flex flex-col w-full  bg-whiteFixed rounded p-6">
            <h2 className="text-xl font-semibold py-2">Fotos</h2>
            <div className="flex flex-wrap justify-between w-full gap-y-4 ">
              {car.images.map((img) => {
                return (
                  <img
                    key={img.id}
                    className="w-[5rem] p-1 py-4 bg-grey7 rounded"
                    src={img.URL}
                    alt="car"
                  />
                );
              })}
            </div>
          </div>

          <div className="flex justify-center w-full flex-col gap-4 bg-whiteFixed p-8 rounded">
            <span className="bg-brand1 text-whiteFixed font-medium rounded-full w-20 h-20 text-center align-middle pt-5 text-4xl m-auto">
              {car.user.name[0].toLocaleUpperCase()}
            </span>
            <h2 className="text-xl font-semibold m-auto">
              {car.user.name[0].toUpperCase() + car.user.name.substring(1)}
            </h2>
            <p className="text-grey2 text-center font-light text-base ">
              {car.user.description}
            </p>
            <Link
              href={`/vendedor/${car.user.id}`}
              className="bg-grey1 text-grey4 p-2 rounded w-2/3 m-auto text-center"
            >
              Ver todos anuncios
            </Link>
          </div>
        </Subcontainer>

        <Subcontainer classname="w-screen z-10 lg:max-w-[68%]">
          <div className="flex justify-center w-full flex-col gap-8 bg-whiteFixed p-6 rounded">
            <h2 className="text-xl font-semibold">Comentários</h2>
            {car.comments.map((comment, id) => (
              <CommentCard key={id} comment={comment} userComent={car.user} />
            ))}
          </div>
        </Subcontainer>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ProductView;
