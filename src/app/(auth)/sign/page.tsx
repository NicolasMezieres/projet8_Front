"use client";
import GrayButton from "@/Component/Button/GrayButton";
import Footer from "@/Component/Footer";
import SignInForm from "@/Component/form/SignInForm";
import SignUpForm from "@/Component/form/SignUpForm";
import HeaderSign from "@/Component/header/HeaderSign";
import MainTitleUser from "@/Component/mainTitleUser";
import { Signin, Signup } from "@/Service/auth";
import { signinType, signupFormType } from "@/Utils/type";
import { schemaSignin } from "@/validator/SigninForm";
import { schemaSignup } from "@/validator/SignupForm";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const page = () => {
  const [styleButton1, setStyleButton1] = useState<string>("");
  const [styleButton2, setStyleButton2] = useState<string>("");
  const [isSignUp, setIsSignUp] = useState<Boolean>(true);
  const { push } = useRouter();
  useEffect(() => {
    if (isSignUp === true) {
      setStyleButton1("InsetButton");
      setStyleButton2("DropShadowButton");
    } else {
      setStyleButton1("DropShadowButton");
      setStyleButton2("InsetButton");
    }
  }, [isSignUp]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<signupFormType>({
    mode: "all",
    resolver: yupResolver(schemaSignup),
  });
  const onSubmitSignup: SubmitHandler<signupFormType> = async (data) => {
    Signup(data).then((res) => {
      if (res?.status === 201) {
        toast(res.data.message);
      }
    });
  };
  const onSubmitSignin: SubmitHandler<signinType> = async (data) => {
    Signin(data).then((res) => {
      if (res?.status === 200) {
        window.localStorage.setItem("token", res.data.access_token);
        toast(res.data.message);
        push("/home");
      }
    });
  };
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
    formState: { errors: errors2 },
  } = useForm<signinType>({
    mode: "all",
    resolver: yupResolver(schemaSignin),
  });
  return (
    <div>
      <HeaderSign />
      <main className="min-h-screen bg-white pb-8 md:px-16 xl:px-40">
        <MainTitleUser />
        <div className="flex justify-center gap-5 pb-8">
          <div
            onClick={() => {
              setIsSignUp(true);
            }}
            className="cursor-pointer"
          >
            <GrayButton additionalCss={styleButton1} text={"Sign Up"} />
          </div>
          <div
            onClick={() => {
              setIsSignUp(false);
            }}
            className="cursor-pointer"
          >
            <GrayButton additionalCss={styleButton2} text={"Sign In"} />
          </div>
        </div>
        {isSignUp && (
          <SignUpForm
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmitSignup}
          />
        )}
        {!isSignUp && (
          <SignInForm
            register={register2}
            handleSubmit={handleSubmit2}
            errors={errors2}
            onSubmit={onSubmitSignin}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default page;
