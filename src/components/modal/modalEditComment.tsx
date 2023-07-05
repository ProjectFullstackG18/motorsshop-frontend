import { ICarComments } from "@/interfaces";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalM } from "./modal";
import { Textarea } from "../textarea";
import { Button } from "../button/button";

interface IModalEditCommentsProps {
    modalEditComment: boolean;
    setModalEditComment: React.Dispatch<React.SetStateAction<boolean>>;
    comment: any,
    id: string
    comments: ICarComments[]
    setComments: any
  }


export const ModalEditComment = ({modalEditComment, setModalEditComment,comment, comments, setComments, id}: IModalEditCommentsProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>();

        const getTextComment = () => {
            const textComment = comments.find(ele => ele.id == id)
            return textComment?.comment
        }

      const handleComment = async (data: any) => {
        try {
          const response = await api.patch(`cars/comments/${id}`, data);
          const updatedComment = response.data

          const commentIndex = comments.findIndex(comment => comment.id === updatedComment.id)

          if(commentIndex !== -1) {
            const updatedComments = [...comments]
            updatedComments[commentIndex] = updatedComment
            setComments(updatedComments)

          }
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
                        <Textarea defaultValue={getTextComment()} placeholder="Digite aqui seu comentário..." register={register("comment")} className=" w-full h-28 p-2  focus:outline-none" rows={50}/>
                        <Button type="submit" text="Editar comentário" className=" absolute bottom-2 right-2 w-36 h-10 bg-brand1 text-grey10 font-semibold rounded h-12" callback={() => console.log("ok!")}/>
                    </form>
                </div>
            </ModalM>


    )
}