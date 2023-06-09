/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/button/button";
import { Header } from "@/components/header/header";
import { Subcontainer } from "@/components/subcontainer/subcontainer";

const data = {
  id: "c2635cf6-620e-4ce6-94e2-3f561bfaf8ae",
  brand: "Chevrolet",
  model: "ONIX HATCH LTZ 1.4 8V FlexPower 5p Mec.",
  year: "2019",
  fuel_type: "Gasoline",
  km: "100000",
  color: "Silver",
  fipe_price: "66.291,00",
  price: "62.400,00",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem, necessitatibus vitae ab possimus perspiciatis at? Iste reiciendis itaque, ipsam impedit, qui fuga aut aspernatureius inventore ducimus odit ipsum nesciunt?",
  created_at: "2023-06-06",
  update_at: "2023-06-06",
  is_active: true,
  images: [
    {
      id: "54099701-7c68-4e7e-a518-8fcd734c0973",
      URL: "https://secure-developments.com/commonwealth/brasil/colorizer_onix/images/colorizer/onix-3-4-frente-branco-summit.png",
    },
    {
      id: "9580f160-1d87-4b05-af99-c7627b1d7109",
      URL: "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2023-onix/mov/02-images/box-de-garantia-gris.jpg?imwidth=900",
    },
    {
      id: "20544f9a-d463-45e2-b716-066d4270d202",
      URL: "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2023-onix/gallery/01-images/01-galeria-onix-my23.jpg?imwidth=1800",
    },
    {
      id: "20544f9a-d463-45e2-b716-066d4270d202",
      URL: "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/optimizaci%C3%B3n/gallery/interior/onix-premier-interior-04.jpg?imwidth=1800",
    },
    {
      id: "20544f9a-d463-45e2-b716-066d4270d202",
      URL: "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/optimizaci%C3%B3n/gallery/interior/onix-premier-interior-05.jpg?imwidth=1800",
    },
    {
      id: "20544f9a-d463-45e2-b716-066d4270d202",
      URL: "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2021-onix/optimizaci%C3%B3n/gallery/interior/onix-premier-interior-06.jpg?imwidth=1800",
    },
  ],
  user: {
    name: "Flavin Pneu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut distinctio eum nisi dolore quas non exercitationem? Quae aperiam maxime tempora commodi quo placeat atque ea necessitatibus? Aspernatur, animi adipisci!",
  },
};

const ProductView: React.FC = () => {
  const abreviationName = data.user.name.split(" ");
  console.log(abreviationName);

  return (
    <div className="bg-grey8">
      {/* <Header>
        {" "}
        <></>
      </Header> */}
      <div className="w-full h-[33rem] bg-brand2 absolute"></div>
      <main className="flex flex-wrap w-[80rem] max-w-full m-auto justify-between">
        <Subcontainer classname=" w-8/12 z-10 min-with-50">
          <div className="flex justify-center w-full bg-whiteFixed py-8 rounded">
            <img className="w-4/5" src={data.images[0].URL} alt="car" />
          </div>
          <div className="flex justify-center align-middle w-full flex-col gap-8 bg-whiteFixed p-8 rounded ">
            <h2 className="text-xl font-semibold">
              {data.brand} - {data.model}
            </h2>
            <div className="flex gap-3 items-center ">
              <span className="p-1 px-2 h-fit bg-brand4 rounded text-brand1 text-sm font-medium">
                {data.year}
              </span>

              <span className="p-1 px-2 h-fit bg-brand4 rounded text-brand1 text-sm font-medium">
                {data.km} KM
              </span>
              <span className="ml-auto p-2 text-base font-medium">
                R$ {data.price}
              </span>
            </div>
            <Button
              text="Comprar"
              type="button"
              className={"bg-brand1 w-32 rounded p-1 text-brand4"}
            ></Button>
          </div>
          <div className="flex justify-center w-full flex-col gap-8 bg-whiteFixed p-8 rounded">
            <h2 className="text-xl font-semibold">Descrição</h2>
            <p>{data.description}</p>
          </div>
        </Subcontainer>

        <Subcontainer classname="w-4/12 z-10 ">
          <div className="flex flex-col w-full  bg-whiteFixed rounded p-8">
            <h2 className="text-xl font-semibold py-2">Fotos</h2>
            <div className="flex flex-wrap justify-between w-full gap-y-4 ">
              {data.images.map((img) => {
                return (
                  <img
                    key={img.id}
                    className="w-[5.2rem] p-1 py-4 bg-grey7 rounded"
                    src={img.URL}
                    alt="car"
                  />
                );
              })}
            </div>
          </div>

          <div className="flex justify-center w-full flex-col gap-4 bg-whiteFixed p-8 rounded">
            <span className="bg-brand1 text-whiteFixed font-medium rounded-full w-20 h-20 text-center align-middle pt-4 text-4xl m-auto">
              {abreviationName[0][0] + abreviationName[1][0]}
            </span>
            <h2 className="text-xl font-semibold m-auto">{data.user.name}</h2>
            <p className="text-grey2 text-center font-light text-base ">
              {data.user.description}
            </p>
            <Button
              text="Ver todos anuncios"
              type="button"
              className="bg-grey1 text-sm text-grey7 p-2 rounded w-2/3 m-auto"
            ></Button>
          </div>
        </Subcontainer>

        {/*<Subcontainer classname="w-4/12">
         comentarios aqui
        </Subcontainer> */}
      </main>
    </div>
  );
};

export default ProductView;
