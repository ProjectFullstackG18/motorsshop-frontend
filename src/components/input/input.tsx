import { InputHTMLAttributes } from "react"

interface IInputProps {
    labelName: string
    labelText: string
    placeholder:string
    type: string
    register: any
    disable: InputHTMLAttributes<HTMLInputElement>
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
        <label htmlFor={labelName}>{labelText}</label>
        <input
          disabled={disable}
          required
          placeholder={placeholder}
          name={labelName}
          type={type}
          {...register}
        />
      </>
    );
  };