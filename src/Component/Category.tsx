import { categoryType } from "@/Utils/type";
import Image from "next/image";
import React from "react";

const Category = ({ category }: { category: categoryType }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <Image
        width={200}
        height={200}
        alt={`image of ${category.name}`}
        src={category.image}
        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-3xl"
      />
      <p className="text-black md:text-xl">{category.name}</p>
    </div>
  );
};

export default Category;
