import { categoryType } from "@/Utils/type";
import React from "react";
import Category from "./Category";

const CategoryList = ({ categoryList }: { categoryList: categoryType[] }) => {
  return (
    <div className="GrayBG w-full md:w-72 p-2 rounded-xl max-h-[500px] md:max-h-[600px] xl:max-h-[600px]">
      <h3 className="md:text-2xl text-black text-center">Category</h3>
      <div className="flex flex-col gap-2 overflow-y-auto max-h-[460px] xl:max-h-[560px] py-2">
        {categoryList &&
          categoryList.map((Element) => {
            return <Category key={Element.id} category={Element} />;
          })}
      </div>
    </div>
  );
};

export default CategoryList;
