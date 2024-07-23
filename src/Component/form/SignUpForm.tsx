import React, { useContext } from "react";
import InputForm from "./InputForm/InputForm";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { signupFormType } from "@/Utils/type";
import BlueButton from "../Button/BlueButton";

const SignUpForm = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
}: {
  register: UseFormRegister<signupFormType>;
  handleSubmit: UseFormHandleSubmit<signupFormType, undefined>;
  errors: FieldErrors<signupFormType>;
  onSubmit: SubmitHandler<signupFormType>;
}) => {
  return (
    <div className="px-2">
      <div className="GrayWhiteBG w-full rounded-3xl py-6">
        <form onSubmit={handleSubmit(onSubmit)} className="text-black ">
          <div className="flex justify-evenly py-2">
            <InputForm
              placeholder={"Enter your Firstname"}
              textLabel={"Firstname"}
              type={"text"}
              verifInput={register("firstname")}
              errors={errors.firstname?.message}
              id={"firstname"}
            />
            <InputForm
              placeholder={"Enter your Lastname"}
              textLabel={"Lastname"}
              type={"text"}
              verifInput={register("lastname")}
              errors={errors.lastname?.message}
              id={"lastname"}
            />
          </div>
          <div className="flex justify-evenly py-2">
            <InputForm
              placeholder={"Enter your Email"}
              textLabel={"Email"}
              type={"email"}
              verifInput={register("email")}
              errors={errors.email?.message}
              id={"email"}
            />
            <InputForm
              placeholder={"Enter your Age"}
              textLabel={"Age"}
              type={"number"}
              verifInput={register("age")}
              errors={errors.age?.message}
              id={"age"}
            />
          </div>
          <div className="flex justify-evenly py-2">
            <InputForm
              placeholder={"Enter your Password"}
              textLabel={"Password"}
              type={"password"}
              verifInput={register("password")}
              errors={errors.password?.message}
              id={"password"}
            />
            <InputForm
              placeholder={"Enter your Confirm Password"}
              textLabel={"Confirm Password"}
              type={"password"}
              verifInput={register("confirmPassword")}
              errors={errors.confirmPassword?.message}
              id={"confirmPassword"}
            />
          </div>
          <div className="flex justify-center pt-4">
            <input id="checkbox" type="checkbox" {...register("checkbox")} />
            <label
              htmlFor="checkbox"
              className="text-xs md:text-base xl:text-2xl select-none"
            >
              Agree to Terms and Conditions
            </label>
          </div>
          {errors && (
            <p className="text-red-600 text-center pb-4">
              {errors.checkbox?.message}
            </p>
          )}
          <BlueButton text={"Sign Up"} />
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
