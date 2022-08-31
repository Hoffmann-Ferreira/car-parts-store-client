import { useState } from "react";
import { EditIcon, TrashIcon } from "../../assets/icons";
import UserModal from "../../components/UserModal";
import DeleteUsertModal from "../../components/DeleteUserModal";
import Menu from "../../components/Menu";
import SettingsMenu from "../../components/SettingsMenu";
import { useUsers } from "../../contexts/Users";
import { User } from "../../types";
import * as Styled from "./styles";

const SettingsUsers = () => {
  const { users } = useUsers();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const [user, setUser] = useState<User | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenUpdateModal = (user: User) => {
    setUser(user);
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <Styled.SettingsContainer>
      <Menu path="settings" />
      <SettingsMenu path="users" />
      <Styled.EntitiesEditContainer>
        <h2>Manage Users</h2>
        <Styled.EntitesEditList>
          <Styled.AddEntitesEditCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p> User add</p>
          </Styled.AddEntitesEditCard>
          {users.map((element) => {
            return (
              <Styled.EntitesCard key={element.id}>
                {element.name}
                <div>
                  <Styled.SettingsUserEditButton
                    onClick={() => handleOpenUpdateModal(element)}
                  >
                    <EditIcon /> To edit
                  </Styled.SettingsUserEditButton>
                  <Styled.SettingsUsertDeleteButton
                    onClick={() => {
                      setUser(element);
                      handleOpenDeleteModal();
                    }}
                  >
                    <TrashIcon /> Delete
                  </Styled.SettingsUsertDeleteButton>
                </div>
              </Styled.EntitesCard>
            );
          })}
        </Styled.EntitesEditList>
      </Styled.EntitiesEditContainer>
      {openModal && (
        <UserModal
          setUser={setUser}
          user={user}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openDeleteModal && (
        <DeleteUsertModal
          userId={user?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
          setUser={setUser}
        />
      )}
    </Styled.SettingsContainer>
  );
};

export default SettingsUsers;
