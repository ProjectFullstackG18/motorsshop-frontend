import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

interface IInputProps {
  labelName: string;
  labelText: string;
  placeholder: string;
  register?: any;
  disable?: boolean;
  children: ReactNode;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  labelName,
  labelText,
  placeholder,
  register,
  disable,
  children,
  onChange,
}: IInputProps) => {
  return (
    <>
      <label className="-mb-6 text-sm font-medium" htmlFor={labelName}>
        {labelText}
      </label>
      <select
        className="rounded px-3 h-12 border-2 border-grey8 bg-grey11 text-sm outline-grey3"
        disabled={disable}
        required
        name={labelName}
        {...register}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          if (onChange) onChange(e);
        }}
      >
        <option value={""}>{placeholder}</option>
        {children}
      </select>
    </>
  );
};
