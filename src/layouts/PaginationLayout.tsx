import {Outlet} from "react-router-dom";
import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";
import {MenuLayout} from "./MenuLayout.tsx";

export const PaginationLayout = () => {
    return (
        <>
            <MenuLayout/>
            <Outlet/>
            <PaginationComponent/>
        </>
    );
};