import * as Styled from "./styles";
import { Product } from "../../types";
import { useState} from "react";

interface CheckoutCardProps { 
    product: Product;
}

const CheckoutCard = ({ product }: CheckoutCardProps) => {

    const [ quantity, setQuantity] = useState<number>(0);

  return (
    <Styled.CheckoutCardContainer>
      <div>
        <img src={product.image} alt={product.name}/>
        <div>
          <h5>{product.name}</h5>
          <p>{product.price}</p>
        </div>
        <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
        <span>${quantity * product.price}</span>
      </div>
      <div>
        <button>🗑</button>
      </div>
    </Styled.CheckoutCardContainer>
  );
};

export default CheckoutCard;
