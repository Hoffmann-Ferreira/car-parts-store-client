import * as Styled from "./styles";
import { Product } from "../../types";
import { useState } from "react";
import toast from "react-hot-toast";
import { TrashIcon } from "../../assets/icons";

interface CheckoutCardProps {
  product: Product;
}

const CheckoutCard = ({ product }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <Styled.CheckoutCardContainer>
      <Styled.CheckoutCardHeader>
        <img src={product.image} alt={product.name} />
        <div>
          <h5 title={product.name}>{product.name}</h5>
          <p>{product.price}</p>
        </div>
        <Styled.ProductQuantityInput
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <span>${(quantity * product.price).toFixed(2)}</span>
      </Styled.CheckoutCardHeader>
      <Styled.CheckoutCardFooter>
        <Styled.RemoveButton
          onClick={() =>
            toast.error("Under development!", {
              icon: "❌",
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            })
          }
        >
          <TrashIcon />
        </Styled.RemoveButton>
      </Styled.CheckoutCardFooter>
    </Styled.CheckoutCardContainer>
  );
};

export default CheckoutCard;
