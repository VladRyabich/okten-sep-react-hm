import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {CreateCarPage} from "../pages/CreateCarPage.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children: [
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element: <CreateCarPage/>}
        ]}
]);