import * as Styled from "./styles";
import Menu from "../../components/Menu";
import { MarketIcon, InfoIcon, PromotionIcon } from "../../assets/icons";
import Button from "../../components/Button";
import SettingsProductCard from "../../components/SettingsProductCard";
import { useProducts } from "../../contexts/Products";
import { useState } from "react";
import ProductModal from "../../components/ProductModal";
import { Category, Product } from "../../types";
import DeleteProductModal from "../../components/DelectProductModal";
import { useCategories } from "../../contexts/categories";

const Settings = () => {
  const { products } = useProducts();
  const { categories } = useCategories();

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0] ||
      ({
        id: "7fb9562e-df63-46f8-a62b-02edd985fe6d",
        name: "Engine",
      } as Category)
  );

  const filteredProducts: Product[] = products.filter(
    (element) => selectedCategory && element.categoryId === selectedCategory.id
  );

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const [product, setProduct] = useState<Product | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <Styled.SettingsContainer>
      <Menu path="settings" />
      <Styled.SettingsNavegationContainer>
        <h2> Settings</h2>
        <Styled.SettingsNavegationButtonList>
          <Styled.SettingsNavegationButtonContainer>
            <Styled.SettingsNavegationButtonSelected>
              <InfoIcon />
              <h4>Manage users</h4>
              <p>add remove and edit</p>
            </Styled.SettingsNavegationButtonSelected>
          </Styled.SettingsNavegationButtonContainer>
          <Styled.SettingsNavegationButtonContainer active>
            <Styled.SettingsNavegationButtonSelected active>
              <MarketIcon />
              <h4>Manage products </h4>
              <p>add remove and edit</p>
            </Styled.SettingsNavegationButtonSelected>
          </Styled.SettingsNavegationButtonContainer>
          <Styled.SettingsNavegationButtonContainer>
            <Styled.SettingsNavegationButtonSelected>
              <PromotionIcon />
              <h4>Manage categories</h4>
              <p>add remove and edit</p>
            </Styled.SettingsNavegationButtonSelected>
          </Styled.SettingsNavegationButtonContainer>
        </Styled.SettingsNavegationButtonList>
      </Styled.SettingsNavegationContainer>

      <Styled.EntitiesEditContainer>
        <h2>Manage products</h2>
        <Styled.EntitiesEditCategorySelector>
          {categories.map((element) => {
            return (
              <Styled.EntitiesEditCategoryButton
                active={element.name === selectedCategory.name}
                onClick={() => setSelectedCategory(element)}
              >
                {element.name}
              </Styled.EntitiesEditCategoryButton>
            );
          })}
        </Styled.EntitiesEditCategorySelector>
        <Styled.EntitesEditList>
          <Styled.AddEntitesEditCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p> Inten add</p>
          </Styled.AddEntitesEditCard>
          {filteredProducts.map((element) => (
            <SettingsProductCard
              handleOpenModal={handleOpenModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
              setProduct={setProduct}
              product={element}
              key={element.id}
            />
          ))}
        </Styled.EntitesEditList>
        <Styled.ConfirmationContainer>
          <Button text="Cancel" variant="cancel" size="large" />
          <Button text="Save changes" size="large" />
        </Styled.ConfirmationContainer>
      </Styled.EntitiesEditContainer>
      {openModal && (
        <ProductModal
          setProduct={setProduct}
          product={product}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openDeleteModal && (
        <DeleteProductModal
          setProduct={setProduct}
          productId={product?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}
    </Styled.SettingsContainer>
  );
};

export default Settings;
