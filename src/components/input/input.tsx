import { InputHTMLAttributes } from "react";

interface IInputProps {
  labelName?: string;
  labelText?: string;
  placeholder: string;
  type: string;
  register?: any;
  disable?: boolean;
  value?: string;
  defaultValue?: string;
  classInput?: string;
  classLabel?: string;
}

export const Input = ({
  labelName,
  labelText,
  placeholder,
  type,
  register,
  disable,
  value,
  defaultValue,
  classLabel,
  classInput,
}: IInputProps) => {
  return (
    <>
      {labelName && labelText ? (
        <>
          <label
            className={["-mb-6", "text-sm", "font-medium", classLabel].join(
              " "
            )}
            htmlFor={labelName}
          >
            {labelText}
          </label>

          <input
            className={[
              "rounded",
              "px-3",
              "h-12",
              "border-2",
              "border-grey8",
              "bg-grey11",
              "text-sm",
              "outline-grey3",
              classInput,
            ].join(" ")}
            disabled={disable}
            required
            placeholder={placeholder}
            name={labelName}
            type={type}
            {...register}
            value={value}
            defaultValue={defaultValue}
          />
        </>
      ) : (
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
      )}
    </>
  );
};
