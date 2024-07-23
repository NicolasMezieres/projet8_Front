import * as yup from "yup";

export const schemaCategory = yup.object().shape({
  image: yup.string().required("This field is required"),
  name: yup
    .string()
    .required("This field is required")
    .min(3, "Minimum 3 character")
    .max(255, "Maximum 255 character"),
});
