import { ICarComments } from "@/interfaces";
import { api } from "@/services/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ModalM } from "./modal";
import { Textarea } from "../textarea";
import { Button } from "../button/button";

interface IModalEditCommentsProps {
    modalEditComment: boolean;
    setModalEditComment: React.Dispatch<React.SetStateAction<boolean>>;
    comment: any,
    id: string
  }


export const ModalEditComment = ({modalEditComment, setModalEditComment, comment, id}: IModalEditCommentsProps) => {
   
    const [isActive, setIsActive] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [ comments, setComments] = useState<ICarComments[]>([])

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm<any>();
    
      const handleComment = async (data: any) => {
        try {
          const response = await api.patch(`cars/comments/${id}`, data);
          const getComments = comments.map((comment) => comment)
          setComments(getComments)
          console.log(response)
        //   comments.push(comment)
        //   setValue("comment", "")
        setModalEditComment(false)
        } catch (e: any) {
          console.log(e.response);
        }
      };

    return (
            <ModalM isOpen={modalEditComment} setIsOpen={setModalEditComment} titleModal="Editar Comentários"
            className="z-50">
                <div>
                    <form className=" relative border-2 border-grey7" onSubmit={handleSubmit(handleComment)}>
                        <Textarea placeholder="Digite aqui seu comentário..." register={register("comment")} className=" w-full h-28 p-2  focus:outline-none" rows={50}/>
                        <Button type="submit" text="Editar comentário" className=" absolute bottom-2 right-2 w-36 h-10 bg-brand1 text-grey10 font-semibold rounded h-12" callback={() => console.log("ok!")}/>
                    </form>
                </div>
            </ModalM>


    )
}