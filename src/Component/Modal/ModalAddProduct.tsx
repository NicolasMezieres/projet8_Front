import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryType, productFormType } from "@/Utils/type";
import { schemaAddProduct } from "@/validator/AddProductForm";
import Form from "./Form";
import AddProduct from "../Button/AddProduct";
import BlueButton from "../Button/BlueButton";
import InputFloatForm from "../form/InputForm/InputFloatForm";
import InputFormAddProduct from "../form/InputForm/InputFormAddProduct";
import { upload } from "@/Service/image";
import { insertProduct } from "@/Service/product";
import { toast } from "react-toastify";
const ModalAddProduct = ({
  categoryList,
  setIsReloadNeed,
}: {
  categoryList: categoryType[];
  setIsReloadNeed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
  } = useForm<productFormType>({
    mode: "all",
    resolver: yupResolver(schemaAddProduct),
  });

  const onSubmit: SubmitHandler<productFormType> = (data) => {
    const formdata = new FormData();
    formdata.append("file", watch("image")[0]);
    upload(formdata).then((res) => {
      console.log(res);
      if (res?.status === 201) {
        const newData = { ...data, image: res.data.image };
        insertProduct(newData).then((res) => {
          if (res?.status === 201) {
            toast.success(res.data.message);
            setOpen(false);
            setIsReloadNeed(true)
          }
        });
      }
    });
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }
  const [src, setSrc] = useState<string>();
  useEffect(() => {
    const blob = new Blob(watch("image"));
    const image = URL.createObjectURL(blob);
    console.log(image);
    setSrc(image);
  }, [watch("image")]);
  return (
    <div>
      <div onClick={handleOpen}>
        <AddProduct text={"Add Product"} />
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
                    console.log(watch("image"));
                  }}
                >
                  test
                </button>
                <InputFormAddProduct
                  placeholder={"Enter your title"}
                  textLabel={"Title"}
                  id={"title"}
                  type="text"
                  verifInput={register("title")}
                  errors={errors.title?.message}
                />
                <label className="text-base xl:text-2xl ">Image</label>
                <div className="h-16 bg-white w-48 md:w-80  text-[10px] md:text-base">
                  <input
                    type="file"
                    className="text-center text-nowrap md:w-80 "
                    {...register("image")}
                  />
                </div>

                {src && <img src={src} />}
                <InputFormAddProduct
                  placeholder={"Enter your description"}
                  textLabel={"Description"}
                  id={"description"}
                  type="text"
                  verifInput={register("description")}
                  errors={errors.description?.message}
                />
                <label htmlFor="category" className="text-base xl:text-2xl">
                  Category
                </label>
                <div>
                  <select
                    size={size}
                    onClick={() => {
                      setHeightSelect("max-h-40");
                      setSize(5);
                    }}
                    id="category"
                    className={`${heightSelect} text-[10px] bg-white rounded-3xl py-1.5 md:py-4  md:text-xl text-center text-nowrap w-28 md:w-48 xl:w-56`}
                    {...register("idCategory", {
                      onBlur: () => {
                        setHeightSelect("max-h-20");
                        setSize(1);
                      },
                      onChange: () => {
                        setHeightSelect("max-h-20");
                        setSize(1);
                      },
                    })}
                  >
                    <option className=" md:text-base text-center text-nowrap w-28 md:w-48 xl:w-56">
                      Select a category
                    </option>
                    {categoryList &&
                      categoryList.map((element) => {
                        return (
                          <option
                            key={element.id}
                            className="md:text-base text-center text-nowrap w-28 md:w-48 xl:w-56"
                            value={element.id}
                          >
                            {element.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                {errors.idCategory && (
                  <p className="text-red-600">{errors.idCategory.message}</p>
                )}
                <div className="flex gap-9">
                  <InputFormAddProduct
                    placeholder={"Enter your quantity"}
                    textLabel={"Quantity"}
                    id={"quantity"}
                    type="number"
                    verifInput={register("quantity")}
                    errors={errors.quantity?.message}
                  />
                  <InputFloatForm
                    placeholder={"Enter your price"}
                    textLabel={"Price"}
                    id={"price"}
                    verifInput={register("price")}
                    errors={errors.price?.message}
                  />
                </div>
                <BlueButton text={"Add a Product"} />
              </div>
            </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddProduct;
