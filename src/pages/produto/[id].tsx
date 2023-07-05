/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/button/button";
import { CommentCard } from "@/components/comment";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Subcontainer } from "@/components/subcontainer/subcontainer";
import { ICarComments, ICarRetrieve, IUserCar } from "@/interfaces";
import { api } from "@/services/api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/textarea";
import { useForm } from "react-hook-form";
import {BsTrash, BsPencil} from "react-icons//bs"
import { ModalEditComment } from "@/components/modal/modalEditComment";

const ProductView: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [car, setCar] = useState<ICarRetrieve>({} as ICarRetrieve);
  const [ comments, setComments] = useState<ICarComments[]>([])
  const [modalEditComment, setModalEditComment] = useState(false);
  const [user, setUser] = useState<IUserCar>()
  const [commentId, setCommentId] = useState<string>("")

  const router = useRouter();
  const { id } = router.query;


  useEffect(() => {
    const getUser = async() => {
      const response = await api.get(`users/`);
      setUser(response.data)
    }
    getUser()
  },[])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<any>();

  const handleComment = async (comment: any) => {
    try {
      const response = await api.post(`cars/${id}/comments/`, comment);
      comments.push(response.data)
      setValue("comment", "")
    } catch (e: any) {
      console.log(e.response);
    }
  };


  const deleteComment = async(id: string) => {
    try {
      const response = await api.delete(`cars/comments/${id}`);
      const getComments = comments.filter((comment) => comment.id !== id)
      setComments(getComments)
    } catch (e: any) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (id) {
        try {
          const { data: carAPI }: { data: ICarRetrieve } = await api.get(
            `cars/${id}`
          );
          setComments(carAPI.comments)
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

  function getInitials(name: string): string {
    let initials = "";
    const words = name.split(" ");

    for (let word of words) {
      const firstLetter = word.charAt(0).toUpperCase();
      initials += firstLetter;
    }

    return initials;
  }

  if (isLoading) return null;
  
  return (
    <div className="bg-grey8">
      <Header />
      <div className="w-full h-[33rem] bg-brand2 absolute"></div>
      <main className="flex flex-wrap  w-[80rem]  max-w-[100vw] m-auto justify-between">
        <Subcontainer classname="w-screen lg:max-w-[68%] z-10">
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

        <Subcontainer classname="w-screen lg:max-w-[28%] z-10">
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

        <Subcontainer classname="w-screen lg:max-w-[68%] mb-2">
          <div className="flex justify-center w-full flex-col gap-8 bg-whiteFixed p-6 rounded">
            <h2 className="text-xl font-semibold">Comentários</h2>
            {comments.map((comment, id) =>(
              <>
                <CommentCard key={id} comment={comment} userComent={car.user} />
                <div className=" flex gap-4">
                  <div onClick={() => setModalEditComment(true)} className="cursor-pointer">
                    <BsPencil onClick={() => setCommentId(comment.id)}/>
                  </div>
                  <Button text={<BsTrash />} type="button" callback={() => deleteComment(comment.id)} className="cursor-pointer"/>

                </div>
                {modalEditComment ? 
                <ModalEditComment 
                modalEditComment={modalEditComment} 
                setModalEditComment={setModalEditComment}
                comment={comment}
                id={commentId}
                key={comment.id}
                comments={comments}
                setComments={setComments}
                />
                : ""}
              </>
            ))}
          </div>
        </Subcontainer>
        {comments.length == 0 ? 
        <Subcontainer classname="w-screen lg:max-w-[67%] p-8 bg-whiteFixed ml-2 mb-2">
          <h2>Não há comentários ainda seja o primeiro a comentar!</h2>
        </Subcontainer>
          : ""}
        {user?
        <Subcontainer classname="w-screen lg:max-w-[67%] p-8 bg-whiteFixed ml-2 ">
        <div className="flex items-center	mb-3 gap-3">
          <p className="bg-brand1 text-whiteFixed font-medium rounded-full w-7 h-7 text-center align-middle pt-1 text-sm ">
            {getInitials(car.user.name)}
          </p>
          <h3>{car.user.name}</h3>
        </div>
        <form className=" relative border-2 border-grey7" onSubmit={handleSubmit(handleComment)}>
          <Textarea placeholder="Digite aqui seu comentário..." register={register("comment")} className=" w-full h-28 p-2  focus:outline-none" rows={50}/>
          <Button type="submit" text="Comentar" className=" absolute bottom-2 right-2 w-36 h-10 bg-brand1 text-grey10 font-semibold rounded h-12" callback={() => console.log("ok!")}/>
        </form>
        <div className="flex gap-8 text-sm pl-2">
          <p onClick={() => setValue("comment", "Gostei muito!")} className="bg-grey5 p-1 pl-4 pr-4 rounded-full cursor-pointer">Gostei muito!</p>
          <p onClick={() => setValue("comment", "Incrível!")} className="bg-grey5 p-1 pl-4 pr-4 rounded-full cursor-pointer">Incrível!</p>
          <p onClick={() => setValue("comment", "Recomendarei para os meus amigos.")} className="bg-grey5 p-1 pl-4 pr-4 rounded-full cursor-pointer">Recomendarei para os meus amigos!</p>
        </div>
        </Subcontainer> :""}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ProductView;
