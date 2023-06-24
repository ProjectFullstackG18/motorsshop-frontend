/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@/components/button/button";
import { CardProduct, CardProductSeler } from "@/components/cards/productCard";
import { Footer } from "@/components/footer/footer";
import { Gallery } from "@/components/gallery/gallery";
import { Header } from "@/components/header/header";
import { ModalEditCar } from "@/components/modal/modalEditCar";
import { ModalNewCar } from "@/components/modal/modalNewCar";
import { ICar, IUser, IUserAPI } from "@/interfaces";
import { api } from "@/services/api";
import Link from "next/link";
import { useEffect, useState } from "react";

const sellerPage = () => {
  //RENDER PAGE
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState<ICar[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);

  //MODAL NEW CAR
  const [modalNewCar, setModalNewCar] = useState(false);

  //MODAL EDIT CAR
  const [modalEditCar, setModalEditCar] = useState(false);
  const [currentCar, setCurrentCar] = useState({} as any);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data }: { data: IUserAPI } = await api.get("users/");
        const { cars, ...user } = data;
        setCars(cars);
        setUser(user);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [modalNewCar, modalEditCar]);

  if (isLoading) return null;

  return (
    <main className="bg-grey9">
      <Header />
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
        <p className="text-grey2 font-light text-base ">{user.description}</p>
        <ModalNewCar
          modalNewCar={modalNewCar}
          setModalNewCar={setModalNewCar}
        />
      </section>
      <ModalEditCar
        currentCar={currentCar}
        modalEditCar={modalEditCar}
        setModalEditCar={setModalEditCar}
        setCurrentCar={setCurrentCar}
      />

      <Gallery className="xl:grid-cols-4 w-[90rem]">
        {cars.map((car) => (
          <CardProductSeler key={car.id} car={car} user={user}>
            <div className="flex w-full gap-3 pt-2">
              <Button
                text="Editar"
                type="button"
                className="p-6 py-1 border-2 rounded"
                callback={() => {
                  setCurrentCar(car);
                  // addFieldsImages(carToEdit);
                  setModalEditCar(true);
                }}
              />
              <Link
                href={`/produto/${car.id}`}
                className="p-6 py-1 border-2 rounded "
              >
                Ver detalhes
              </Link>
            </div>
          </CardProductSeler>
        ))}
      </Gallery>

      <div className="md:hidden  flex gap-5 flex-col justify-center items-center">
        <Button
          text="Filtros"
          type="button"
          className="bg-brand2 w-[279px] h-[48px] rounded text-grey10 font-semibold "
        />
        <p className="text-grey3 font-bold">1 de 2</p>
        <p className="text-brand2 font-bold">Seguinte &gt; </p>
      </div>
      <Footer />
    </main>
  );
};

export default sellerPage;
