import React, { useContext } from "react";

const InputFloatForm = ({
  placeholder,
  textLabel,
  verifInput,
  errors,
  value,
  id,
}: {
  placeholder: string;
  textLabel: string;
  verifInput: {};
  errors: any;
  id: string;
  value?: string;
}) => {
  return (
    <div className="w-32 md:w-52 xl:w-60 text-center">
      <label htmlFor={id} className="text-base xl:text-2xl select-none">
        {textLabel}
      </label>
      <div className="bg-white flex justify-center items-center rounded-3xl py-1.5 md:py-4">
        <input
          step={0.01}
          placeholder={placeholder}
          value={value}
          {...verifInput}
          autoComplete="off"
          id={id}
          className="text-[10px] md:text-base text-center text-nowrap w-28 md:w-48 xl:w-56"
        />
      </div>
      {errors && <p className="max-w-full text-red-600">{errors}</p>}
    </div>
  );
};

export default InputFloatForm;
