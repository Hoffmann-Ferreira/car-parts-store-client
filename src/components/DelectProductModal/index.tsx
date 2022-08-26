import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useProducts } from "../../contexts/Products";
import { api } from "../../Services";
import { Product } from "../../types";
import Button from "../Button";
import { DeleteModalContainer } from "./styles";

interface DeleteProductModalProps {
  productId?: string;
  handleOpenDeleteModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

const DeleteProductModal = ({
  productId,
  handleOpenDeleteModal,
  setProduct,
}: DeleteProductModalProps) => {
  const { handleGetProducts } = useProducts();
  const [buttonType, setButtonType] = useState<string>("");

  const handleDeleteProduct = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if(buttonType !== "cancel"){
    api.delete(`/products/${productId}`, headers).then(() => {
    toast.success("product deleted successfully", {
        icon: "✅",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      handleGetProducts();  
      setProduct(undefined);
      handleOpenDeleteModal();
    
    })}else {
        setButtonType("");
        handleOpenDeleteModal();
    }
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2> Delete Product?</h2>
        <div>
          <Button
            onClick={() => {
              setButtonType("cancel");
              setProduct(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancel"
            variant="cancel"
            size="small"
          />
          <Button text="Delete" size="small" onClick={handleDeleteProduct} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteProductModal;
