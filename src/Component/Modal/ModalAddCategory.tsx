import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryFormType, categoryType, productFormType } from "@/Utils/type";
import { schemaAddProduct } from "@/validator/AddProductForm";
import Form from "./Form";
import AddProduct from "../Button/AddProduct";
import BlueButton from "../Button/BlueButton";
import InputFloatForm from "../form/InputForm/InputFloatForm";
import InputFormAddProduct from "../form/InputForm/InputFormAddProduct";
import { upload } from "@/Service/image";
import { insertProduct } from "@/Service/product";
import { toast } from "react-toastify";
import { schemaCategory } from "@/validator/CategoryForm";
import { insertCategory } from "@/Service/category";
const ModalAddCategory = ({
  setIsReloadNeed,
}: {
  setIsReloadNeed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [errorImageFile, setErrorImageFile] = useState<string>("");
  const [size, setSize] = useState<number>(1);
  const [heightSelect, setHeightSelect] = useState<string>("");
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
    if (watch("image").length > 0) {
      const formdata = new FormData();
      formdata.append("file", watch("image")[0]);
      upload(formdata).then((res) => {
        console.log(res);
        if (res?.status === 201) {
          const newData = { ...data, image: res.data.image };
          insertCategory(newData).then((res) => {
            if (res?.status === 201) {
              toast.success(res.data.message);
              setOpen(false);
              setIsReloadNeed(true);
            }
          });
        }
      });
    } else {
      setErrorImageFile("Need a file");
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }
  const [src, setSrc] = useState<string>("");
  useEffect(() => {
    if (watch("image")) {
      if (watch("image").length > 0) {
        const blob = new Blob(watch("image"));
        const image = URL.createObjectURL(blob);
        console.log(image);
        setSrc(image);
      }
    }
  }, [watch("image")]);
  return (
    <div>
      <div onClick={handleOpen}>
        <AddProduct text={"Add Category"} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="relative flex flex-col justify-center items-center gap-8 left-[15px] md:left-16 xl:left-40 rounded-2xl pt-2"
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="gap-4 text-center text-black h-[380px] md:h-[400px] xl:h-[500px] w-[340px] md:w-[640px] xl:w-[1200px] flex justify-center">
              <div className="h-[350px] md:h-[380px]  md:pt-16 xl:pt-0 xl:overflow-hidden xl:h-[492px]  flex flex-col justify-center items-center gap-6 w-[320px] md:w-[600px]  overflow-y-scroll ">
                <button
                  onClick={handleClose}
                  className="absolute top-10 right-10 border-2 border-red-600 text-white bg-red-600 py-1 px-3 rounded-3xl"
                >
                  X
                </button>
                <label className="text-base xl:text-2xl mt-4">Image</label>
                <div className="bg-white w-48 md:w-80  text-[10px] md:text-base mb-t">
                  <input
                    type="file"
                    className="text-center text-nowrap md:w-80 "
                    {...register("image", {
                      onChange: () => {
                        setErrorImageFile("");
                      },
                    })}
                  />
                </div>
                {errorImageFile && (
                  <p className="text-red-700">{errorImageFile}</p>
                )}
                {src && src !== "" && (
                  <img
                    src={src}
                    alt="image Product select by admin"
                    className="md:max-h-36"
                  />
                )}
                <InputFormAddProduct
                  type="text"
                  placeholder={"Enter a Category Name"}
                  textLabel={"Category"}
                  id={"category"}
                  verifInput={register("name")}
                  errors={errors.name?.message}
                />
                <BlueButton text={"Add a Category"} />
              </div>
            </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddCategory;
