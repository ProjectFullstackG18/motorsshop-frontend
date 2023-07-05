import { TextareaHTMLAttributes } from "react";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelName?: string;
  labelText?: string;
  name?: string;
  register?: any;
  disable?: boolean;
}

export const Textarea = ({
  labelName,
  labelText,
  placeholder,
  register,
  disable,
  name,
  cols,
  rows,
  ...props
}: ITextareaProps) => {
  return (
    <>
      <label className="-mb-6 text-sm font-medium" htmlFor={labelName}>
        {labelText}
      </label>
      <textarea
        className="rounded h-24 border-2 border-grey8 bg-grey11 text-sm outline-grey3 resize-none p-3"
        disabled={disable}
        required
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        {...register}
        {...props}
      />
    </>
  );
};
