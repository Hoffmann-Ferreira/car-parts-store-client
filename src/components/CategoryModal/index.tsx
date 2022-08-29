import { ErrorMessage, ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services";
import toast from "react-hot-toast";
import { useCategories } from "../../contexts/categories";

interface CategoryModalProps {
  handleOpenModal: () => void;
}

interface NewCategorieData {
  name: string;
}

const newCategorySchema = yup.object().shape({
  name: yup.string().required("Fill in the category name"),
});

const CategoryModal = ({ handleOpenModal }: CategoryModalProps) => {
  const { handleGetCategories } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCategorieData>({
    resolver: yupResolver(newCategorySchema),
  });

  const handleNewCategory = (data: NewCategorieData) => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

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
  return (
    <ModalOverlay>
      <ModalContainer onSubmit={handleSubmit(handleNewCategory)}>
        <h2>Create New Category</h2>
        <StyledInput placeholder="Category Name" {...register("name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <div>
          <Button
            text="Cancel"
            variant="cancel"
            size="small"
            onClick={handleOpenModal}
          />
          <Button text="Submit" size="small" type="submit" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CategoryModal;
