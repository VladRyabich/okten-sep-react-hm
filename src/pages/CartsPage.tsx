import {CartsComponent} from "../components/carts-component/CartsComponent.tsx";
import {Outlet} from "react-router-dom";

export const CartsPage = () => {
    return (
        <div>
            <Outlet/>
            <CartsComponent/>
        </div>
    );
};