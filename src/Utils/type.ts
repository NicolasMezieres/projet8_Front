import { File } from "buffer";

export type signupType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  age: number;
};
export type signinType = {
  email: string;
  password: string;
};
export type signupFormType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: number;
  checkbox: boolean;
};
export type productType = {
  description: string;
  id: string;
  idCategory: string;
  image: string;
  price: number;
  quantity: number;
  title: string;
  category: {
    name: string;
  };
};
export type categoryType = {
  id: string;
  image: string;
  name: string;
};
export type categoryFormType = {
  image: any;
  name: string;
};
export type productFormType = {
  description: string;
  idCategory: string;
  image: any;
  price: number;
  quantity: number;
  title: string;
};
export type productUpdateType = {
  description: string;
  idCategory: string;
  image: any;
  price: number;
  quantity: number;
  title: string;
  id: string;
};
export type formProps = {
  children: React.ReactNode;
  additionalCss?: string;
  onSubmit: any;
};
export type optionSelectType = {
  value: string;
  label: string;
};
export type cartType = {
  id: string;
  name: string;
  cartHasProduct: [
    {
      id: string;
      quantity: number;
      product: {
        id: string;
        title: string;
        image: string;
        description: string;
        quantity: number;
        price: number;
        category: {
          name: string;
        };
      };
    }
  ];
};
export type userType = {
  firstname: string;
  lastname: string;
  email: string;
  age: number;
  isActive: boolean;
};
