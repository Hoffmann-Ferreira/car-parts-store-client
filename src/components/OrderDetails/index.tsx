import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <div>
          <h2>Order Number</h2>
        </div>
      </Styled.OrderDetailsHeader>
      <div>
        <div>
          <h3>item</h3>
          <h3>the amount</h3>
          <h3>price</h3>
        </div>
        <div className="checkout-cars-container">
          <div> Card Checkout </div>
          <div> Card Checkout </div>
          <div> Card Checkout </div>
        </div>
      </div>
      <div>
        <div>
          <p>discount</p>
          <p>R$0.00</p>
        </div>
      </div>
      <div>
        <div>
          <p>total</p>
          <p>R$0.00</p>
        </div>
        <button>continue to payment</button>
      </div>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
