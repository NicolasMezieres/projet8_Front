import { categoryType } from "@/Utils/type";
import Image from "next/image";
import React from "react";
import RedButtonCategory from "./Button/RedButtonCategory";
import { removeCategory } from "@/Service/category";
import { toast } from "react-toastify";
import ModalUpdateCategory from "./Modal/ModalUpdateCategory";

const CategoryItem = ({
  category,
  setIsReloadNeed,
}: {
  category: categoryType;
  setIsReloadNeed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  async function deleteCategory() {
    removeCategory(category.id).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        setIsReloadNeed(true);
      }
    });
  }
  return (
    <div className="flex flex-col w-32 h-44 md:w-40 md:h-60 xl:w-64 items-center justify-self-center text-center bg-black text-white p-2 py-4 xl:py-5 gap-1 rounded-[45px]">
      <Image
        width={200}
        height={200}
        alt={`image of ${category.name}`}
        src={category.image}
        className="w-20 h-[70px] md:w-24 md:h-24 xl:w-44 xl:h-32 object-cover rounded-3xl"
      />
      <p className=" md:text-xl">{category.name}</p>
      <div className="flex text-xs gap-2">
        <ModalUpdateCategory
          category={category}
          setIsReloadNeed={setIsReloadNeed}
        />
        <div onClick={deleteCategory}>
          <RedButtonCategory text={"Delete"} />
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
