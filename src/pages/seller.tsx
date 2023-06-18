import { Button } from "@/components/button/button";
import { CardProduct } from "@/components/cards/productCard";
import { Footer } from "@/components/footer/footer";
import { Gallery } from "@/components/gallery/gallery";
import { Header } from "@/components/header/header";

export const sellerPage = () => {
  <main>
    {/* <Header></Header> */}
    <div className="flex container m-auto">
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
    <div className="md:hidden block gap-5 flex-col justify-center items-center">
      <Button
        text="Filtros"
        type="button"
        className="bg-brand2 w-[279px] h-[48px] rounded text-grey10 font-semibold"
      />
      <p className="text-grey3 font-bold">1 de 2</p>
      <p className="text-brand2 font-bold">Seguinte &gt; </p>
    </div>
    <Footer />
  </main>;
};
