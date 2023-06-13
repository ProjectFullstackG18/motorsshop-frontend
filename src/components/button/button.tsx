import React from "react";

interface IButtonProps {
  type: "button" | "submit";
  className?: string;
  text: string;
  callback?: () => void;
  disable?: boolean;
}

export const Button = ({
  type,
  text,
  className,
  callback,
  disable,
}: IButtonProps) => {
  return (
    <button
      disabled={disable}
      className={className}
      type={type}
      onClick={callback}
    >
      {text}
    </button>
  );
};
