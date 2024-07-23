import { updateCategory } from "@/Service/category";
import { upload } from "@/Service/image";
import { categoryFormType, categoryType } from "@/Utils/type";
import { schemaCategory } from "@/validator/CategoryForm";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import RedButtonCategory from "../Button/RedButtonCategory";
import { Box, Modal } from "@mui/material";
import InputFormUpdateProduct from "../form/InputForm/InputFormUpdateProduct";
import RedButton from "../Button/RedButton";
import Form from "./Form";

const ModalUpdateCategory = ({
  category,
  setIsReloadNeed,
}: {
  category: categoryType;
  setIsReloadNeed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const style = {
    position: "absolute" as "fixed",
    top: "20%",
    bgcolor: "rgb(212 212 212);",
    border: "2px solid #000",
    boxShadow: 24,
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<categoryFormType>({
    mode: "all",
    resolver: yupResolver(schemaCategory),
  });
  const onSubmit: SubmitHandler<categoryFormType> = (data) => {
    const newData = { ...data, id: category.id };
    if (watch("image").length === 0) {
      const oldImage = category.image.replace(
        "http://localhost:3000/image/view/",
        ""
      );
      const newNewData = { ...newData, image: oldImage };
      console.log(newNewData.image);
      updateCategory(newNewData).then((res) => {
        console.log(res);
        if (res?.status === 200) {
          toast.success(res.data.message);
          setOpen(false);
          setIsReloadNeed(true);
        }
      });
    } else {
      const formdata = new FormData();
      formdata.append("file", watch("image")[0]);
      upload(formdata).then((res) => {
        if (res?.status === 201) {
          const newNewData = { ...newData, image: res.data.image };
          updateCategory(newNewData).then((res) => {
            console.log(res);
            if (res?.status === 200) {
              toast.success(res.data.message);
              setOpen(false);
              setIsReloadNeed(true);
            }
          });
        }
      });
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }

  const [src, setSrc] = useState<string>(category.image);
  useEffect(() => {
    if (watch("image")) {
      if (watch("image").length > 0) {
        const blob = new Blob(watch("image"));
        const image = URL.createObjectURL(blob);
        setSrc(image);
      }
    }
  }, [watch("image")]);

  return (
    <div>
      <div onClick={handleOpen}>
        <RedButtonCategory text={"Update"} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="relative flex flex-col justify-center items-center gap-8 left-[7.5px] md:left-16 xl:left-40 rounded-2xl pt-2"
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="gap-4 text-center text-black h-[324px] xl:h-[500px] w-[360px] md:w-[640px] xl:w-[1200px] flex justify-center">
              <div className="h-[316px] xl:h-[492px] flex flex-col items-center gap-4 w-[320px] md:w-[600px]  overflow-y-scroll ">
                <button
                  onClick={handleClose}
                  className="absolute top-10 right-10 border-2 border-red-600 text-white bg-red-600 py-1 px-3 rounded-3xl"
                >
                  X
                </button>
                <button
                  onClick={() => {
                    console.log(category.image, src);
                  }}
                >
                  test2
                </button>
                <label className="text-base xl:text-2xl ">Image</label>
                <div className="h-16 bg-white w-48 md:w-80  text-[10px] md:text-base">
                  <input
                    type="file"
                    className="text-center text-nowrap md:w-80 "
                    {...register("image")}
                  />
                </div>
                {src && <img src={src} />}
                <InputFormUpdateProduct
                  defaultValue={category.name}
                  placeholder={"Enter a Category Name"}
                  textLabel={"Category Name"}
                  id={"categoryName"}
                  type="text"
                  verifInput={register("name")}
                  errors={errors.name?.message}
                />
                <RedButton text={"Update"} />
              </div>
            </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalUpdateCategory;
