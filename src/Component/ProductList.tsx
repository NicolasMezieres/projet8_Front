import { categoryType, productType } from "@/Utils/type";
import React from "react";
import Product from "./Product";

const ProductList = ({
  productList,
  isAdmin,
  setIsReloadNeed,
  categoryList,
}: {
  productList: productType[];
  isAdmin: boolean;
  setIsReloadNeed: React.Dispatch<React.SetStateAction<boolean>>;
  categoryList: categoryType[];
}) => {
  return (
    <div className="grid gap-8 grid-cols-1 md:justify-items-center  w-40 px-2 GrayWhiteBG px-1 rounded-xl py-2 overflow-y-auto max-h-[500px] xl:max-h-[600px] md:w-60 md:px-0 xl:grid-cols-2 md:w-full">
      {productList &&
        productList.map((Element) => {
          return (
            <Product
              categoryList={categoryList}
              key={Element.id}
              product={Element}
              isAdmin={isAdmin}
              setIsReloadNeed={setIsReloadNeed}
            />
          );
        })}
    </div>
  );
};

export default ProductList;
