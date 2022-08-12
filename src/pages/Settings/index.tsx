import * as Styled from "./styles";
import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";

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
                        <div className="buttonSelectSide">
                            <img/>
                            <h4>Manage products</h4>
                            <p>add remove and edit</p>
                        </div>
                    </Styled.SettingsNavegationButtonContainer>
                    <Styled.SettingsNavegationButtonContainer>
                        <div className="buttonSelectSide">
                            <img/>
                            <h4>Manage users</h4>
                            <p>add remove and edit</p>
                        </div>
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