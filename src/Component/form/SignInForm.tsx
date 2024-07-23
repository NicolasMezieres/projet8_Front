import React, { useContext } from "react";
import InputForm from "./InputForm/InputForm";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { signinType } from "@/Utils/type";
import BlueButton from "../Button/BlueButton";

const SignInForm = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
}: {
  register: UseFormRegister<signinType>;
  handleSubmit: UseFormHandleSubmit<signinType, undefined>;
  errors: FieldErrors<signinType>;
  onSubmit: SubmitHandler<signinType>;
}) => {
  return (
    <div className="px-2 my-10">
      <div className="GrayWhiteBG w-full rounded-3xl py-8 md:py-20">
        <form onSubmit={handleSubmit(onSubmit)} className="text-black ">
          <div className="flex justify-evenly py-2">
            <InputForm
              placeholder={"Enter your Email"}
              textLabel={"Email"}
              type={"email"}
              verifInput={register("email")}
              errors={errors.email?.message}
              id={"Email"}
            />
            <InputForm
              placeholder={"Enter your Password"}
              textLabel={"Password"}
              type={"password"}
              verifInput={register("password")}
              errors={errors.password?.message}
              id={"Password"}
            />
          </div>
          <BlueButton additionalCss="pt-4" text={"Sign Up"} />
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
