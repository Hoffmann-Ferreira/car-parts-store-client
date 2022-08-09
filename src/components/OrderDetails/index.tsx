import Button from "../Button";
import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <div>
          <h2>Order Number</h2>
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.CheckoutDetailsContainer>
        <Styled.CheckoutDetailsHeader>
          <h3>Item</h3>
          <h3 className="itemH3">The amount</h3>
          <h3>Price</h3>
        </Styled.CheckoutDetailsHeader>
        <div className="checkout-cars-container">
          <div> Card Checkout </div>
          <div> Card Checkout </div>
          <div> Card Checkout </div>
        </div>
      </Styled.CheckoutDetailsContainer>
      <Styled.OrderDetailsFooter>
        <div>
          <p>Discount</p>
          <p>$0.00</p>
        </div>
        <div>
          <p>Total</p>
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
