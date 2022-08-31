import {
  ErrorMessage,
  ModalOverlay,
  StyledInput,
} from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services";
import toast from "react-hot-toast";
import { useCategories } from "../../contexts/categories";
import { Category } from "../../types";
import { Dispatch, SetStateAction } from "react";

interface CategoryModalProps {
  handleOpenModal: () => void;
  category?: Category;
  setCategory: Dispatch<SetStateAction<Category | undefined>>
}

interface CategorieData {
  name: string;
}

const CategorySchema = yup.object().shape({
  name: yup.string().required("Fill in the category name"),
});

const CategoryModal = ({
  handleOpenModal,
  category,
  setCategory,
}: CategoryModalProps) => {
  const { handleGetCategories } = useCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategorieData>({
    resolver: yupResolver(CategorySchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewCategory = (data: CategorieData) => {
    api
      .post("/category", data, headers)
      .then(() => {
        toast.success("Category registered successfully!", {
          icon: "🆗",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        handleGetCategories();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Category register error!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const handleUpdateCategory = (data: CategorieData) => {
    api
      .patch(`/category/${category?.id}`, data, headers)
      .then(() => {
        toast.success("Category edited successfully!", {
          icon: "🆗",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        handleGetCategories();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Category edit error!", {
          icon: "❌",
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
      <ModalContainer
        onSubmit={handleSubmit(
          category ? handleUpdateCategory : handleNewCategory
        )}
      >
        <h2>{category ? "Edit category" : "Create New Category"}</h2>
        <StyledInput
          placeholder="Category Name"
          {...register("name")}
          defaultValue={category ? category.name : ""}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <div>
          <Button
            text="Cancel"
            variant="cancel"
            size="small"
            onClick={() => {
              setCategory(undefined);
               handleOpenModal();
            }}
          />
          <Button text="Submit" size="small" type="submit" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CategoryModal;
