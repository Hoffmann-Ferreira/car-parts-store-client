import { Product } from "../../types";
import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";

interface SettingsProductCardProps {
  product: Product;
}

const SettingsProductCard = ({ product }: SettingsProductCardProps) => {
  return (
    <Styled.SettingsProductCardConainer>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Styled.SettingsProductCardButton> To edit <EditIcon/> </Styled.SettingsProductCardButton>
    </Styled.SettingsProductCardConainer>
  );
};

export default SettingsProductCard;
