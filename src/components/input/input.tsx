import { InputHTMLAttributes } from "react";

interface IInputProps {
  labelName?: string;
  labelText?: string;
  placeholder: string;
  type: string;
  register?: any;
  disable?: boolean;
}

export const Input = ({
  labelName,
  labelText,
  placeholder,
  type,
  register,
  disable,
}: IInputProps) => {
  return (
    <>
      {labelName && labelText ? (
        <>
          <label className="-mb-6 text-sm font-medium" htmlFor={labelName}>
            {labelText}
          </label>

          <input
            className="rounded px-3 h-12 border-2 border-grey8 bg-grey11 text-sm outline-grey3"
            disabled={disable}
            required
            placeholder={placeholder}
            name={labelName}
            type={type}
            {...register}
          />
        </>
      ) : (
        <input
          className="rounded px-3 h-12 border-2 border-grey8 bg-grey11 text-sm outline-grey3"
          disabled={disable}
          required
          placeholder={placeholder}
          name={labelName}
          type={type}
          {...register}
        />
      )}
    </>
  );
};
