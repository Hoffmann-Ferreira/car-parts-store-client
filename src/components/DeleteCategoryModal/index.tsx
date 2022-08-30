import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useCategories } from "../../contexts/Categories";
import { api } from "../../Services";
import { Category } from "../../types";
import Button from "../Button";
import { DeleteModalContainer } from "./styles";

interface DeleteCategoryModalProps {
  categoryId?: string;
  handleOpenDeleteModal: () => void;
  setCategory: Dispatch<SetStateAction<Category | undefined>>;
}

const DeleteCategorytModal = ({
  categoryId,
  handleOpenDeleteModal,
  setCategory,
}: DeleteCategoryModalProps) => {
  const { handleGetCategories } = useCategories();

  const [buttonType, setButtonType] = useState<string>("");

  const handleDeleteCategory = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (buttonType !== "cancel") {
      api.delete(`/category/${categoryId}`, headers).then(() => {
        toast.success("CategoryId deleted successfully", {
          icon: "✅",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        handleGetCategories();
        setCategory(undefined);
        handleOpenDeleteModal();
      });
    } else {
      setButtonType("");
      handleOpenDeleteModal();
    }
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2> Delete Category?</h2>
        <div>
          <Button
            onClick={() => {
              setButtonType("cancel");
              setCategory(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancel"
            variant="cancel"
            size="small"
          />
          <Button text="Delete" size="small" onClick={handleDeleteCategory} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteCategorytModal;
