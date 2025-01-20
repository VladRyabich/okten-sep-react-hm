import {Outlet} from "react-router-dom";
import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";
import {MenuComponent} from "../components/menu/MenuComponent.tsx";

export const PaginationLayout = () => {
    return (
        <>
            <MenuComponent/>
            <Outlet/>
            <PaginationComponent/>
        </>
    );
};