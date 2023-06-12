import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Button } from "@/components/button/button";
import { CardProduct } from "@/components/cards/productCard";
import { Gallery } from "@/components/gallery/gallery";
import { DashboardCover } from "@/components/cover/coverHomepage";
import { AsideFilter } from "@/components/asideFilter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header>
        <Button text="Fazer Login" type="button"  />
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
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Gallery>
      </div>
      <div className="md:hidden block flex gap-5 flex-col justify-center items-center">
        <Button text="Filtros" type="button" className="bg-brand2 w-[279px] h-[48px] rounded text-grey10 font-semibold"/>
        <p className="text-grey3 font-bold">1 de 2</p>
        <p className="text-brand2 font-bold">Seguinte &gt; </p>
      </div>

        <Footer/>
    </main>
  );
}
