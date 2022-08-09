import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import ProductList from "../../components/productslist";
import * as Styled from "./styles";
import { DateTime } from "luxon";
import { mockedProducsts } from "../../mocks";
import { mockedCategories } from "../../mocks";
import { useState } from "react";
import { Category, Product } from "../../types";
import OrderDetails from "../../components/OrderDetails";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    mockedCategories[0]
  );

  const filteredProducts: Product[] = mockedProducsts.filter(
    (element) => element.categoryId === selectedCategory.id
  );

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
            {mockedCategories.map((element) => {
              return (
                <Styled.CategoriesNavegation
                  key={element.id}
                  active={element.name === selectedCategory.name}
                  onClick={() => setSelectedCategory(element)}
                >
                  {element.name}
                </Styled.CategoriesNavegation>
              );
            })}
          </Styled.CategoriesNavegationBar>
          <Styled.HomeContentHeader>
            <h2>Pick your part</h2>
          </Styled.HomeContentHeader>
          <ProductList list={filteredProducts} />
        </section>
      </Styled.HomeContentContainer>
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;
