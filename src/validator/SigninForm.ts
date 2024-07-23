import * as yup from "yup";

export const schemaSignin = yup.object({
  email: yup
    .string()
    .required("This field is required")
    .email("Need an email valid"),
  password: yup
    .string()
    .required("This field is required")
    .matches(/[a-z]/, "You need a lowercase")
    .matches(/[A-Z]/, "You need an Uppercase")
    .matches(/[0-9]/, "You need a number")
    .matches(/[@!?]/, "You need special character")
    .min(8, "Minimum 8 character")
    .required("This field is required"),
});
