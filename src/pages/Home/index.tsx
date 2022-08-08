import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import ProductList from "../../components/productslist";
import * as Styled from "./styles";
import { DateTime } from "luxon";
import { mockedProducsts } from "../../mocks";

const Home = () => {
  const actualDate = DateTime.now();
  const formateDate = `${actualDate.weekdayLong} , ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>Car-Parts-Store</h1>
            <p>{formateDate}</p>
          </Styled.TitleContainer>
          <Styled.SearchInputContainer>
            <SearchIcon />
            <input placeholder="Search for part" />
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavegationBar>
            <Styled.CategoriesNavegation active>
              Break
            </Styled.CategoriesNavegation>
            <Styled.CategoriesNavegation>Engine</Styled.CategoriesNavegation>
            <Styled.CategoriesNavegation>
              Suspension
            </Styled.CategoriesNavegation>
            <Styled.CategoriesNavegation>Favorite</Styled.CategoriesNavegation>
          </Styled.CategoriesNavegationBar>
          <Styled.HomeContentHeader>
            <h2>Pick your part</h2>
          </Styled.HomeContentHeader>
          <ProductList list={mockedProducsts} />
        </section>
      </Styled.HomeContentContainer>
      <aside>
        <header>
          <h2>Order number</h2>
          <div>
            <button>Pick up on the spot</button>
            <button>Delivery</button>
          </div>
        </header>
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
      </aside>
    </Styled.HomeContainer>
  );
};

export default Home;
