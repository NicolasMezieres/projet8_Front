import { formProps } from "@/Utils/type";
import React from "react";

const Form = ({ children, additionalCss, onSubmit }: formProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`${additionalCss} flex flex-col items-center `}
    >
      {children}
    </form>
  );
};

export default Form;
