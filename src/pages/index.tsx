import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Button } from "@/components/button/button";
import { CardProduct } from "@/components/cards/productCard";
import { Gallery } from "@/components/gallery/gallery";
import { DashboardCover } from "@/components/cover/coverHomepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header>
        <Button text="Fazer Login" type="button" className="font-semibold" />
        <Button
          text="Cadastrar"
          type="button"
          className="border-2 border-gray-500 rounded w-36 h-10 font-semibold"
        />
      </Header>
      <DashboardCover />
      <section>
        <ul className="flex flex-row w-full h-full gap-20 overflow-scroll">
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </ul>
      </section>
      {/* <Gallery></Gallery> */}
      {/* <Footer/> */}
    </main>
  );
}
