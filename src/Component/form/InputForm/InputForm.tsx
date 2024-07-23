import React, { useContext } from "react";

const InputForm = ({
  placeholder,
  textLabel,
  type,
  verifInput,
  errors,
  value,
  id,
}: {
  placeholder: string;
  textLabel: string;
  type: string;
  verifInput: {};
  errors: any;
  id: string;
  value?: string;
}) => {
  return (
    <div className="w-32 md:w-40 xl:w-60 text-center">
      <label
        htmlFor={id}
        className="text-xs md:text-base xl:text-2xl select-none"
      >
        {textLabel}
      </label>
      <div className="bg-white flex justify-center items-center rounded-3xl py-1.5 md:py-4">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          {...verifInput}
          autoComplete="off"
          id={id}
          className="text-[8px] md:text-[10px] xl:text-base text-center text-nowrap w-28 md:w-36 xl:w-56"
        />
      </div>
      {errors && <p className="max-w-full text-red-600 text">{errors}</p>}
    </div>
  );
};

export default InputForm;
