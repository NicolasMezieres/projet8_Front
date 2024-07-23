import React, { useContext } from "react";

const InputFormUpdateProduct = ({
  placeholder,
  textLabel,
  type,
  verifInput,
  errors,
  value,
  id,
  defaultValue,
}: {
  placeholder: string;
  textLabel: string;
  type: string;
  verifInput: {};
  errors: any;
  id: string;
  value?: string;
  defaultValue: string | number;
}) => {
  return (
    <div className="w-32 md:w-52 xl:w-60 text-center">
      <label
        htmlFor={id}
        className="text-base md:text-base xl:text-2xl select-none"
      >
        {textLabel}
      </label>
      <div className="bg-white flex justify-center items-center rounded-3xl py-1.5 md:py-4">
        <input
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          value={value}
          {...verifInput}
          autoComplete="off"
          id={id}
          className="text-[10px] md:text-base text-center text-nowrap w-28 md:w-48 xl:w-56"
        />
      </div>
      {errors && <p className="max-w-full text-red-600 text">{errors}</p>}
    </div>
  );
};

export default InputFormUpdateProduct;
