import {IProduct} from "../../../models/IProduct.ts";

//пропса для продуктів
interface ProductComponentProps {
    product: IProduct
}

export const ProductComponent = ({product}: ProductComponentProps) => {
    return (
            <li>
                <h2>{product.id}</h2>
                <h3>{product.title}</h3>
            </li>
    );
};