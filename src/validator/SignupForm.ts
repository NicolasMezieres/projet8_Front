import * as yup from "yup";
export const schemaSignup = yup.object({
  firstname: yup
    .string()
    .required("This field is required")
    .min(3, "Need minimum 3 character"),
  lastname: yup
    .string()
    .required("This field is required")
    .min(3, "Need minimum 3 character"),
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
  confirmPassword: yup
    .string()
    .required("Please retype your password")
    .oneOf([yup.ref("password")], "Your password do not match"),
  age: yup
    .number()
    .required("This field is required")
    .min(18, "You need to have more than 18 year old"),
  checkbox: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("This field is required"),
});
