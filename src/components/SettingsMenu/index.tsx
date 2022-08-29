import { useNavigate } from "react-router-dom";
import { InfoIcon, MarketIcon, PromotionIcon } from "../../assets/icons";
import * as Styled from "./styles";

interface SettingsMenuProps {
  path: "users" | "categories" | "products";
}

const SettingsMenu = ({ path }: SettingsMenuProps) => {
  const navigate = useNavigate();
  return (
    <Styled.SettingsNavegationContainer>
      <h2> Settings</h2>
      <Styled.SettingsNavegationButtonList>
        <Styled.SettingsNavegationButtonContainer
          active={path === "users"}
          onClick={() => navigate("/settings/users")}
        >
          <Styled.SettingsNavegationButtonSelected>
            <InfoIcon />
            <h4>Manage users</h4>
            <p>add remove and edit</p>
          </Styled.SettingsNavegationButtonSelected>
        </Styled.SettingsNavegationButtonContainer>
        <Styled.SettingsNavegationButtonContainer
          active={path === "products"}
          onClick={() => navigate("/settings/products")}
        >
          <Styled.SettingsNavegationButtonSelected active>
            <MarketIcon />
            <h4>Manage products </h4>
            <p>add remove and edit</p>
          </Styled.SettingsNavegationButtonSelected>
        </Styled.SettingsNavegationButtonContainer>
        <Styled.SettingsNavegationButtonContainer
          active={path === "categories"}
          onClick={() => navigate("/settings/categories")}
        >
          <Styled.SettingsNavegationButtonSelected>
            <PromotionIcon />
            <h4>Manage categories</h4>
            <p>add remove and edit</p>
          </Styled.SettingsNavegationButtonSelected>
        </Styled.SettingsNavegationButtonContainer>
      </Styled.SettingsNavegationButtonList>
    </Styled.SettingsNavegationContainer>
  );
};

export default SettingsMenu;
