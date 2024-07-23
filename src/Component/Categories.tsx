import { categoryType } from "@/Utils/type";
import React from "react";
import Category from "./Category";
import CategoryItem from "./CategoryItem";

const Categories = ({
  categoryList,
  setIsReloadNeed,
}: {
  categoryList: categoryType[];
  setIsReloadNeed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="GrayBG p-2 mt-5 xl:mt-14 rounded-xl max-h-[500px] md:max-h-[600px] xl:max-h-[600px]">
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-2 xl:gap-9 overflow-y-auto max-h-[460px] xl:max-h-[560px] py-2 xl:py-8">
        {categoryList &&
          categoryList.map((Element) => {
            return (
              <CategoryItem
                setIsReloadNeed={setIsReloadNeed}
                key={Element.id}
                category={Element}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Categories;
