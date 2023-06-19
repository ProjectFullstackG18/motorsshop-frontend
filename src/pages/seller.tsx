import { Button } from "@/components/button/button";
import { CardProduct, CardProductSeller } from "@/components/cards/productCard";
import { Footer } from "@/components/footer/footer";
import { Gallery, SellerGallery } from "@/components/gallery/gallery";
import { Header } from "@/components/header/header";

const data = {
  user: {
    name: "Flavin Pneu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut distinctio eum nisi dolore quas non exercitationem? Quae aperiam maxime tempora commodi quo placeat atque ea necessitatibus? Aspernatur, animi adipisci!",
    user_type: "anunciante",
  },
};

const sellerPage = () => {
  const abreviationName = data.user.name.split(" ");
  return (
    <div>
      <Header>
        <div
          className="w-12 h-12 rounded-full bg-brand1 
                inline-flex items-center justify-center 
                bg-white text-whiteFixed text-xl font-bold"
        >
          {abreviationName[0][0] + abreviationName[1][0]}
        </div>
        <h2 className="w-99px h-28px font-normal ">{data.user.name}</h2>
      </Header>
      <div className="w-full h-[16rem] bg-brand2 absolute"></div>
      <main className="flex flex-wrap justify-between bg-grey8 w-screen h-full">
        <div className="absolute flex justify-center align-middle w-[77rem] left-8 top-36 flex-col gap-8 bg-whiteFixed p-6 rounded ">
          <div>
            <span
              className="bg-brand1 text-whiteFixed w-20 h-20 rounded-full
                inline-flex items-center justify-center 
               text-xl font-bold"
            >
              {abreviationName[0][0] + abreviationName[1][0]}
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <h2 className="text-xl font-semibold m-auto">{data.user.name}</h2>
            <h2 className="p-1 px-2 h-fit bg-brand4 rounded text-brand1 text-sm font-medium">
              {data.user.user_type}
            </h2>
          </div>
          <p>{data.user.description}</p>
          <Button
            text="Criar anuncio"
            type="button"
            className={
              "text-brand1 w-32 rounded p-1 bg-whiteFixed border-brand1 border-2"
            }
          ></Button>
        </div>
        <SellerGallery>
          <CardProductSeller />
          <CardProductSeller />
          <CardProductSeller />
          <CardProductSeller />
          <CardProductSeller />
          <CardProductSeller />
        </SellerGallery>

        {/* <div className="md:hidden block gap-5 flex-col justify-center items-center">
          <p className="text-grey3 font-bold">1 de 2</p>
          <p className="text-brand2 font-bold">Seguinte &gt; </p>
        </div> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default sellerPage;
