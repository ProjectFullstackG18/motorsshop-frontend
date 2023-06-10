import { TextareaHTMLAttributes } from "react";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelName: string;
  labelText: string;
  name: string;
  register: any;
  disable?: boolean;
}

export const Textarea = ({
  labelName,
  labelText,
  placeholder,
  register,
  disable,
  name,
  ...props
}: ITextareaProps) => {
  return (
    <>
      <label htmlFor={labelName}>{labelText}</label>
      <textarea
        disabled={disable}
        required
        placeholder={placeholder}
        name={name}
        {...register}
        {...props}
      />
    </>
  );
};
