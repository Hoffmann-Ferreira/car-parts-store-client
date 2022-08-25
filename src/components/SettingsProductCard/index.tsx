import { Product } from "../../types";
import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";
import { Dispatch, SetStateAction } from "react";

interface SettingsProductCardProps {
  product: Product;
  handleOpenModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

const SettingsProductCard = ({
  product,
  handleOpenModal,
  setProduct,
}: SettingsProductCardProps) => {
  return (
    <Styled.SettingsProductCardConainer>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Styled.SettingsProductCardButton
        onClick={() => {
          setProduct(product);
          handleOpenModal();
        }}
      >
        {" "}
        <EditIcon /> To edit{" "}
      </Styled.SettingsProductCardButton>
    </Styled.SettingsProductCardConainer>
  );
};

export default SettingsProductCard;
