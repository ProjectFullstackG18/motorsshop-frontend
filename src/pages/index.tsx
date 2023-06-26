import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Button } from "@/components/button/button";
import { CardProduct } from "@/components/cards/productCard";
import { Gallery } from "@/components/gallery/gallery";
import { DashboardCover } from "@/components/cover/coverHomepage";
import { AsideFilter } from "@/components/asideFilter";
import ModalEditUser from "@/components/modalEditUser";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { ICarRetrieve } from "@/interfaces";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [cars, setCars] = useState<ICarRetrieve[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: cars }: { data: ICarRetrieve[] } = await api.get("cars/");
        setCars(cars);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (isLoading) return null;

  return (
    <main>
      {/* <ModalEditUser /> */}
      <Header>
        <Button text="Fazer Login" type="button" />
        <Button
          text="Cadastrar"
          type="button"
          className="border-2 border-grey6 rounded w-36 h-10 font-semibold"
        />
      </Header>
      <DashboardCover />
      {/* <Gallery></Gallery> */}

      <div className="flex container m-auto">
        <AsideFilter />
        <Gallery>
          {cars.map((car) => {
            return <CardProduct key={car.id} car={car} user={car.user} />;
          })}
        </Gallery>
      </div>
      <div className="md:hidden flex gap-5 flex-col justify-center items-center">
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
