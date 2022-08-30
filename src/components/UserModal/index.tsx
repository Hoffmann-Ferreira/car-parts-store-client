import {
  ErrorMessage,
  ModalOverlay,
  StyledInput,
} from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Services";
import toast from "react-hot-toast";
import { useUsers } from "../../contexts/Users";
import { User } from "../../types";
import { Dispatch, SetStateAction } from "react";

interface UserModalProps {
  handleOpenModal: () => void;
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

interface UserData {
  name: string;
  email: string;
  password?: string;
}

const UserSchema = yup.object().shape({
  name: yup.string().required("Fill in the user name"),

  email: yup
    .string()
    .email("invalid email")
    .required("mandatory filling of the email field"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "User password, containing an uppercase letter, lowercase letter, number and a character"
    )
    .required("mandatory filling of the password field"),
});

const UserModal = ({ handleOpenModal, user, setUser }: UserModalProps) => {
  const { handleGetUsers } = useUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(UserSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewUser = (data: UserData) => {
    api
      .post("/users", data, headers)
      .then(() => {
        toast.success("User registered successfully!", {
          icon: "🆗",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        handleGetUsers();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("User register error!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const handleUpdateUser = (data: UserData) => {
    api
      .patch(`/users/${user?.id}`, data, headers)
      .then(() => {
        toast.success("User edited successfully!", {
          icon: "🆗",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        handleGetUsers();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("User edit error!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  return (
    <ModalOverlay>
      <ModalContainer
        onSubmit={handleSubmit(user ? handleUpdateUser : handleNewUser)}
      >
        <h2>{user ? "Edit User" : "Create New User"}</h2>
        <StyledInput
          placeholder="User Name"
          {...register("name")}
          defaultValue={user ? user.name : ""}
        />
        <StyledInput
          placeholder="User email"
          {...register("email")}
          defaultValue={user ? user.email : ""}
        />
        <StyledInput  
          type="password"
          placeholder="User password"
          {...register("password")}
          defaultValue={user ? user.password : ""}
        />

        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <div>
          <Button
            text="Cancel"
            variant="cancel"
            size="small"
            onClick={() => {
              setUser(undefined);
              handleOpenModal();
            }}
          />
          <Button text="Submit" size="small" type="submit" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default UserModal;
