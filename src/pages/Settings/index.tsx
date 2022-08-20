import * as Styled from "./styles";
import Menu from "../../components/Menu";
import { MarketIcon, InfoIcon, PromotionIcon } from "../../assets/icons";
import Button from "../../components/Button";
import { mockedProducsts } from "../../mocks";
import SettingsProductCard from "../../components/SettingsProductCard";

const Settings = () => {
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
          <Styled.AddEntitesEditCard>
            <h2>+</h2>
            <p> Inten add</p>
          </Styled.AddEntitesEditCard>
          {mockedProducsts.map((element) => (
            <SettingsProductCard product={element} key={element.id} />
          ))}
        </Styled.EntitesEditList>
        <Styled.ConfirmationContainer>
          <Button text="Cancel" variant="cancel" size="large" />
          <Button text="Save changes" size="large" />
        </Styled.ConfirmationContainer>
      </Styled.EntitiesEditContainer>
    </Styled.SettingsContainer>
  );
};

export default Settings;
