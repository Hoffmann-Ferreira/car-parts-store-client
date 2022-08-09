import Button from "../Button";
import CheckoutCard from "../ChekoutCard";
import * as Styled from "./styles";

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
          {/* <CheckoutCard /> */}
          <div> Card Checkout </div>
          <div> Card Checkout </div>
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
          size="large"
          onClick={() => {}}
          variant={false}
        />
      </Styled.OrderDetailsFooter>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
