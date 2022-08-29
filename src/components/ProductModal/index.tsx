import {
  ErrorMessage,
  ModalOverlay,
  StyledInput,
} from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, SetStateAction, useState } from "react";
import { mockedCategories } from "../../mocks/index";
import { api } from "../../Services";
import toast from "react-hot-toast";
import { useProducts } from "../../contexts/Products";
import { Product } from "../../types";

interface ProductModalProps {
  handleOpenModal: () => void;
  product?: Product;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

interface NewProductData {
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  categoryId?: string;
}

const newProductSchema = yup.object().shape({
  name: yup.string().required("mandatory filling of the name"),

  description: yup.string().required("Mandatory filling of the descrption"),

  price: yup.number().required("Mandatory filling of the price"),

  image: yup.string().url().required("Mandatory filling of the image"),
});

const updateProductSchema = yup.object().shape({
  name: yup.string(),

  description: yup.string(),

  price: yup.number(),

  image: yup.string().url("Mandatory filling of the image"),
});

const ProductModal = ({
  handleOpenModal,
  product,
  setProduct,
}: ProductModalProps) => {
  const { handleGetProducts } = useProducts();

  const [categoryId, setCategoryId] = useState<string>(
    product ? product.categoryId : ""
  );
  //
  const [buttonType, setButtonType] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({
    resolver: yupResolver(product ? updateProductSchema : newProductSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewProduct = (data: NewProductData) => {
    data.categoryId = categoryId;
    console.log(buttonType);
    if (buttonType !== "cancel") {
      api
        .post("/products", data, headers)
        .then((res) => {
          handleGetProducts();
          handleOpenModal();
          setProduct(undefined);

          toast.success("product registered successfully!", {
            icon: "🆗",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        })
        .catch((error) =>
          toast.error("Please select category", {
            icon: "❌",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          })
        );
    } else {
      handleOpenModal();
      setButtonType("");
    }
  };

  const handleUpdateProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    api.patch(`/products/${product?.id}`, data, headers).then(() => {
      handleGetProducts();
      handleOpenModal();
      setProduct(undefined);

      toast.success("Update product successfully!", {
        icon: "🆗",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    });
  };

  return (
    <ModalOverlay>
      <Styled.ModalContainer
        onSubmit={
          product
            ? handleSubmit(handleUpdateProduct)
            : handleSubmit(handleNewProduct)
        }
      >
        <h2>{product ? "Edit the product" : "Add product"}</h2>
        <StyledInput
          defaultValue={product ? product.name : ""}
          placeholder="Product Name"
          {...register("name")}
        />
        <StyledInput
          defaultValue={product ? product.description : ""}
          placeholder="Product Description"
          {...register("description")}
        />
        <StyledInput
          defaultValue={product ? product.price : ""}
          type="number"
          step="0.01"
          placeholder="Product Price"
          {...register("price")}
        />
        <StyledInput
          defaultValue={product ? product.image : ""}
          placeholder="Product URL Image"
          {...register("image")}
        />
        <Styled.Select
          defaultValue={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>Select Category</option>
          {mockedCategories.map((element) => (
            <option key={element.id} value={element.id}>
              {" "}
              {element.name}
            </option>
          ))}
        </Styled.Select>
        <ErrorMessage>
          {errors.name?.message ||
            errors.description?.message ||
            errors.price?.message ||
            errors.image?.message}
        </ErrorMessage>
        <div>
          <Button
            onClick={() => {
              setButtonType("cancel");
              setProduct(undefined);
              handleOpenModal();
            }}
            text="Cancel"
            size="small"
            variant="cancel"
          />
          <Button text="Submit" size="small" type="submit" />
        </div>
      </Styled.ModalContainer>
    </ModalOverlay>
  );
};

export default ProductModal;
