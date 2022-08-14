import * as Styled from "./styles";
import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";
import { MarketIcon, InfoIcon, PromotionIcon  } from "../../assets/icons"

interface SettingsProps {
    setLogged: Dispatch<SetStateAction<boolean>>;
  }

const Settings = ({setLogged}: SettingsProps) => {
    return(
        <Styled.SettingsContainer>
            <Menu path="settings" setLogged={setLogged} />
            <Styled.SettingsNavegationContainer>
                <h2> Settings</h2>
                <Styled.SettingsNavegationButtonList>
                    <Styled.SettingsNavegationButtonContainer>  
                        <Styled.SettingsNavegationButtonSelected>
                            <MarketIcon/>
                            <h4>Manage products</h4>
                            <p>add remove and edit</p>
                        </Styled.SettingsNavegationButtonSelected>
                    </Styled.SettingsNavegationButtonContainer>
                    <Styled.SettingsNavegationButtonContainer active>
                        
                        <Styled.SettingsNavegationButtonSelected active>
                            <InfoIcon/>
                            <h4>Manage Users </h4>
                            <p>add remove and edit</p>
                        </Styled.SettingsNavegationButtonSelected>
                    </Styled.SettingsNavegationButtonContainer>
                    <Styled.SettingsNavegationButtonContainer> 
                        <Styled.SettingsNavegationButtonSelected>
                           <PromotionIcon/>
                            <h4>Manage categories</h4>
                            <p>add remove and edit</p>
                        </Styled.SettingsNavegationButtonSelected>
                    </Styled.SettingsNavegationButtonContainer>

                </Styled.SettingsNavegationButtonList>
            </Styled.SettingsNavegationContainer>

            <div className="entitesContainer">
                <div>
                    <h2>Gerenciar produtos</h2>
                    <div className="categoriesSelector">
                        <button>Categoria</button>
                        <button>Categoria</button>
                        <button>Categoria</button>
                    </div>
                    <div className="entites list">
                    <div>Entity card</div>
                    <div>Entity card</div>
                    <div>Entity card</div>
                    <div>Entity card</div>
                    </div>
                    <div className="confirmationContainer">
                        <button> Cancenlar</button>
                        <button> Cancenlar</button>
                    </div>
                </div>
            </div>
        </Styled.SettingsContainer>
    );

};

export default Settings;