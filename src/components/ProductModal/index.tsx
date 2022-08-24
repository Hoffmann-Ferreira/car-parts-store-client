import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { mockedCategories } from "../../mocks/index";
import { api } from "../../Services";
import toast from "react-hot-toast";
import { useProducts } from "../../contexts/Products";

interface ProductModalProps {
  handleOpenModal: () => void;
}

interface NewProductData {
  name: string;
  description: string;
  image: string;
  price: number;
  categoryId?: string;
}

const newProductSchema = yup.object().shape({
  name: yup.string().required("mandatory filling of the name"),

  description: yup.string().required("Mandatory filling of the descrption"),

  price: yup.number().required("Mandatory filling of the price"),

  image: yup.string().url().required("Mandatory filling of the image"),
});

const ProductModal = ({ handleOpenModal }: ProductModalProps) => {
  const { handleGetProducts } = useProducts();

  const [categoryId, setCategoryId] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({ resolver: yupResolver(newProductSchema) });

  const handleNewProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    api
      .post("/products", data, headers)
      .then((res) => {
        handleGetProducts();
        handleOpenModal();

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
  };

  return (
    <Styled.ModalOverlay>
      <Styled.ModalContainer onSubmit={handleSubmit(handleNewProduct)}>
        <h2>Add Product</h2>
        <StyledInput placeholder="Product Name" {...register("name")} />
        <StyledInput
          placeholder="Product Description"
          {...register("description")}
        />
        <StyledInput
          type="number"
          step="0.01"
          placeholder="Product Price"
          {...register("price")}
        />
        <StyledInput placeholder="Product URL Image" {...register("image")} />
        <Styled.Select
          value={categoryId}
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
        {
          <ErrorMessage>
            {errors.name?.message ||
              errors.description?.message ||
              errors.price?.message ||
              errors.image?.message}
          </ErrorMessage>
        }
        <div>
          <Button
            onClick={handleOpenModal}
            text="Cancel"
            size="small"
            variant="cancel"
          />
          <Button text="Submit" size="small" type="submit" />
        </div>
      </Styled.ModalContainer>
    </Styled.ModalOverlay>
  );
};

export default ProductModal;
