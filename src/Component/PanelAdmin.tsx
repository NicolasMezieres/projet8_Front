import React from "react";
import WhiteButton from "./Button/WhiteButton";
import ModalAddProduct from "./Modal/ModalAddProduct";
import { categoryType } from "@/Utils/type";
import ModalAddCategory from "./Modal/ModalAddCategory";
import { useRouter } from "next/navigation";

const PanelAdmin = ({
  categoryList,
  setIsReloadNeed,
}: {
  categoryList: categoryType[];
  setIsReloadNeed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { push } = useRouter();
  return (
    <div className="flex justify-center py-4 gap-4 md:gap-8">
      <ModalAddProduct
        setIsReloadNeed={setIsReloadNeed}
        categoryList={categoryList}
      />
      <ModalAddCategory setIsReloadNeed={setIsReloadNeed} />
      <div
        onClick={() => {
          push("/listUser");
        }}
      >
        <WhiteButton
          additionalCss="DropShadowButton GrayBGHover"
          text={"List"}
        />
      </div>
    </div>
  );
};

export default PanelAdmin;
