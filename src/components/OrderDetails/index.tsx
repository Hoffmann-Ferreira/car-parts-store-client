import toast from "react-hot-toast";
import Button from "../Button";
import CheckoutCard from "../ChekoutCard";
import * as Styled from "./styles";
import { mockedProducsts } from "../../mocks";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <div>
          <h2>Order Number: 1</h2>
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.CheckoutDetailsContainer>
        <Styled.CheckoutDetailsHeader>
          <h3>Item</h3>
          <h3 className="itemH3">The amount</h3>
          <h3>Price</h3>
        </Styled.CheckoutDetailsHeader>
        <Styled.CheckoutCardsContainer>
          <CheckoutCard product={mockedProducsts[0]} />
          <CheckoutCard product={mockedProducsts[1]} />
          <CheckoutCard product={mockedProducsts[2]} />
        </Styled.CheckoutCardsContainer>
      </Styled.CheckoutDetailsContainer>
      <Styled.OrderDetailsFooter>
        <div>
          <h4>Discount</h4>
          <p>$0.00</p>
        </div>
        <div>
          <h4>Total</h4>
          <p>$0.00</p>
        </div>
        <Button
          text="Click to proceed to payment"
          size="x-large"
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
        />
      </Styled.OrderDetailsFooter>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
