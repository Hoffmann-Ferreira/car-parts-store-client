import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { ModalOverlay } from "../../assets/styles/globalStyles";
import { useUsers } from "../../contexts/Users";
import { api } from "../../Services";
import { User } from "../../types";
import Button from "../Button";
import { DeleteModalContainer } from "./styles";

interface DeleteUserModalProps {
  userId?: string;
  handleOpenDeleteModal: () => void;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const DeleteUserModal = ({
  userId,
  handleOpenDeleteModal,
  setUser,
}: DeleteUserModalProps) => {
  const { handleGetUsers } = useUsers();

  const [buttonType, setButtonType] = useState<string>("");

  const handleDeleteUser = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (buttonType !== "cancel") {
      api.delete(`/users/${userId}`, headers).then(() => {
        toast.success("User deleted successfully", {
          icon: "✅",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        handleGetUsers();
        setUser(undefined);
        handleOpenDeleteModal();
      });
    } else {
      setButtonType("");
      handleOpenDeleteModal();
    }
  };

  return (
    <ModalOverlay>
      <DeleteModalContainer>
        <h2> Delete User?</h2>
        <div>
          <Button
            onClick={() => {
              setButtonType("cancel");
              setUser(undefined);
              handleOpenDeleteModal();
            }}
            text="Cancel"
            variant="cancel"
            size="small"
          />
          <Button text="Delete" size="small" onClick={handleDeleteUser} />
        </div>
      </DeleteModalContainer>
    </ModalOverlay>
  );
};

export default DeleteUserModal;
