import * as Styled from "./styles";
import Menu from "../../components/Menu";
import { MarketIcon, InfoIcon, PromotionIcon } from "../../assets/icons";
import Button from "../../components/Button";
import SettingsProductCard from "../../components/SettingsProductCard";
import { useProducts } from "../../contexts/Products";
import { useState } from "react";
import ProductModal from "../../components/ProductModal";

const Settings = () => {
  const { products } = useProducts();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
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
          <Styled.EntitiesEditCategoryButton active>
            Engine
          </Styled.EntitiesEditCategoryButton>
          <Styled.EntitiesEditCategoryButton>
            Suspension
          </Styled.EntitiesEditCategoryButton>
          <Styled.EntitiesEditCategoryButton>
            Break
          </Styled.EntitiesEditCategoryButton>
        </Styled.EntitiesEditCategorySelector>
        <Styled.EntitesEditList>
          <Styled.AddEntitesEditCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p> Inten add</p>
          </Styled.AddEntitesEditCard>
          {products.map((element) => (
            <SettingsProductCard product={element} key={element.id} />
          ))}
        </Styled.EntitesEditList>
        <Styled.ConfirmationContainer>
          <Button text="Cancel" variant="cancel" size="large" />
          <Button text="Save changes" size="large" />
        </Styled.ConfirmationContainer>
      </Styled.EntitiesEditContainer>
      {openModal && <ProductModal handleOpenModal={handleOpenModal} />}
    </Styled.SettingsContainer>
  );
};

export default Settings;
