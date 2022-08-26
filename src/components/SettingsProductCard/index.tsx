import { Product } from "../../types";
import * as Styled from "./styles";
import { EditIcon, TrashIcon } from "../../assets/icons";
import { Dispatch, SetStateAction } from "react";

interface SettingsProductCardProps {
  product: Product;
  handleOpenModal: () => void;
  handleOpenDeleteModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

const SettingsProductCard = ({
  product,
  handleOpenModal,
  handleOpenDeleteModal,
  setProduct,
}: SettingsProductCardProps) => {
  return (
    <Styled.SettingsProductCardConainer>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div>
        <Styled.SettingsProductEditButton
          onClick={() => {
            setProduct(product);
            handleOpenModal();
          }}
        >
          <EditIcon /> To edit
        </Styled.SettingsProductEditButton>
        <Styled.SettingsProductDeleteButton
          onClick={() => {
            setProduct(product);
            handleOpenDeleteModal();
          }}
        >
          <TrashIcon /> Delete
        </Styled.SettingsProductDeleteButton>
      </div>
    </Styled.SettingsProductCardConainer>
  );
};

export default SettingsProductCard;
