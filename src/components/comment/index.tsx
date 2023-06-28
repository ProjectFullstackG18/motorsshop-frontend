/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IComment, IUser } from "@/interfaces";

interface IPropsCard {
  comment: IComment;
  userComent: IUser;
}

export const CommentCard = ({ comment, userComent }: IPropsCard) => {
  function getInitials(name: string): string {
    let initials = "";
    const words = name.split(" ");

    for (let word of words) {
      const firstLetter = word.charAt(0).toUpperCase();
      initials += firstLetter;
    }

    return initials;
  }

  return (
    <div>
      <div className="flex items-center	mb-3 gap-3">
        <p className="bg-brand1 text-whiteFixed font-medium rounded-full w-7 h-7 text-center align-middle pt-1 text-sm ">
          {getInitials(userComent.name)}
        </p>
        <h3>{userComent.name}</h3>
        <span className="text-grey4">●</span>
        <span className="text-grey4">há 3 dias</span>
      </div>
      <p className="text-base">{comment.comment}</p>
    </div>
  );
};
