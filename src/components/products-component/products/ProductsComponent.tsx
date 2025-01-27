import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../../../services/api.service.ts";
import {IProduct} from "../../../models/IProduct.ts";
import {ProductComponent} from "../product/ProductComponent.tsx";

export const ProductsComponent = () => {
    // useState для визначення продуктів
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        //витягаємо дані з апі і пакуємо їх в products
        loadAuthProducts()
            .then(products => setProducts(products))
            .catch(reason => {
                // у випадку помилки від апі на наш запит виводимо її в консоль
                console.log(reason);
                // застосовуємо refresh для заміни нашої поточної пари токенів на новий екземпляр
                refresh()
                    // після чого повторюємо запит, але вже з новим access токеном
                    .then(() => loadAuthProducts())
                    .then(products => setProducts(products));
            });
    }, []);
    return (
        <ul>
            {
                products.map(product => <ProductComponent key={product.id} product={product}/>)
            }
        </ul>
    );
};