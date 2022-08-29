import { useState } from "react";
import { EditIcon, TrashIcon } from "../../assets/icons";
import CategoryModal from "../../components/CategoryModal";
import Menu from "../../components/Menu";
import SettingsMenu from "../../components/SettingsMenu";
import { useCategories } from "../../contexts/categories";
import { Category } from "../../types";
import * as Styled from "./styles";

const SettingsCategories = () => {
  const { categories } = useCategories();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [category, setCategory] = useState<Category | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenUpdateModal = (category: Category) => {
    setCategory(category);
    setOpenModal(!openModal);
  };

  return (
    <Styled.SettingsContainer>
      <Menu path="settings" />
      <SettingsMenu path="categories" />
      <Styled.EntitiesEditContainer>
        <h2>Manage Categories</h2>
        <Styled.EntitesEditList>
          <Styled.AddEntitesEditCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p> Category add</p>
          </Styled.AddEntitesEditCard>
          {categories.map((element) => {
            return (
              <Styled.EntitesCard key={element.id}>
                {element.name}
                <div>
                  <Styled.SettingsCategoryEditButton
                    onClick={() => handleOpenUpdateModal(element)}
                  >
                    <EditIcon /> To edit
                  </Styled.SettingsCategoryEditButton>
                  <Styled.SettingsCategorytDeleteButton>
                    <TrashIcon /> Delete
                  </Styled.SettingsCategorytDeleteButton>
                </div>
              </Styled.EntitesCard>
            );
          })}
        </Styled.EntitesEditList>
      </Styled.EntitiesEditContainer>
      {openModal && (
        <CategoryModal 
        setCategory={setCategory}
        category={category} handleOpenModal={handleOpenModal} />
      )}
    </Styled.SettingsContainer>
  );
};

export default SettingsCategories;
