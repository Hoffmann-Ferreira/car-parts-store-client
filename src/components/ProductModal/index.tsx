import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ProductModalProps {
  handleOpenModal: () => void;
}

interface NewProductData {
  name: string;
  description: string;
  image: string;
  price: number;
}

const newProductSchema = yup.object().shape({
  name: yup.string().required("mandatory filling of the name"),

  description: yup.string().required("Mandatory filling of the descrption"),

  price: yup.number().required("Mandatory filling of the price"),

  image: yup.string().url().required("Mandatory filling of the image"),
});

const ProductModal = ({ handleOpenModal }: ProductModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({ resolver: yupResolver(newProductSchema) });

  const handleNewProduct = (data: NewProductData) => {
    console.log(data);
  };

  return (
    <Styled.ModalOverlay>
      <Styled.ModalContainer onSubmit={handleSubmit(handleNewProduct)}>
        <h2>Add Product</h2>
        <StyledInput placeholder="Product Name" {...register("name")} />
        <StyledInput
          placeholder="Product Description"
          {...register("description")}
        />
        <StyledInput
          type="number"
          placeholder="Product Price"
          {...register("price")}
        />
        <StyledInput placeholder="Product URL Image" {...register("image")} />
        <StyledInput placeholder="Product Category" />
        {
          <ErrorMessage>
            { errors.name?.message ||
              errors.description?.message ||
              errors.price?.message ||
              errors.image?.message}
          </ErrorMessage>
        }
        <div>
          <Button
            onClick={handleOpenModal}
            text="Cancel"
            size="small"
            variant="cancel"
          />
          <Button text="Submit" size="small" type="submit" />
        </div>
      </Styled.ModalContainer>
    </Styled.ModalOverlay>
  );
};

export default ProductModal;
