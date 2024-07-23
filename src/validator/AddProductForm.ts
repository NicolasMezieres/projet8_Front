import * as yup from "yup";

export const schemaAddProduct = yup.object().shape({
  description: yup
    .string()
    .required("This field is required")
    .min(3, "Minimum 3 character")
    .max(255, "Maximum 255 character"),

  title: yup
    .string()
    .required("This field is required")
    .min(3, "Minimum 3 character")
    .max(255, "Maximum 255 character"),

  quantity: yup
    .number()
    .integer("Need a number integer")
    .required("This field is required")
    .min(1, "Minimum 1")
    .max(100000, "Maximumm 100000"),

  price: yup
    .number()
    .required("This field is required")
    .min(1, "Minimum 1 $")
    .max(10000000, "Maximum 10000000 $"),

  image: yup.string().required("This field is required"),

  idCategory: yup
    .string()
    .required("This field is required")
    .uuid("Need a Category"),
});
