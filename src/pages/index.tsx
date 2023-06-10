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

      <div>
        {/* <Gallery>
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Gallery> */}
        <AsideFilter />
      </div>

        <Footer/>
    </main>
  );
}
