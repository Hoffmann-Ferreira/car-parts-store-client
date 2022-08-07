import { Product } from "../../types";

interface ProductCardProps {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    return(
        <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductCard;