import {ICart} from "../../models/ICart.ts";
import {FC} from "react";
import './cartComponent.css';

type CartComponentProps = {
    cart: ICart
};

export const CartComponent:FC<CartComponentProps> = ({cart}) => {
    return (
        <div className={'cart-block'}>
            <h2 className={'cart-info'}><span>ID:</span>{cart.id}</h2>
            <h3 className={'cart-info'}><span>TOTAL:</span>{cart.total}</h3>
            <p className={'cart-info'}><span>TOTAL PRODUCTS:</span>{cart.totalProducts}</p>
            <p className={'cart-info'}><span>DISCOUNTED TOTAL:</span>{cart.discountedTotal}</p>
            <p className={'cart-info'}><span>TOTAL QUANTITY:</span>{cart.totalQuantity}</p>
        </div>
    );
};