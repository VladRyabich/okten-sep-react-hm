import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {CartComponent} from "../cart-component/CartComponent.tsx";
import {cartService} from "../../services/api.service.ts";

export const CartsComponent = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts);
                });
        }
    }, [id]);

    return (
        <>
            {
                carts.map((cart:ICart) => <CartComponent key={cart.id} cart={cart}/>)
            }
        </>
    );
};