import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";

const routes = createBrowserRouter([
    {
        path:'/', element:<MainLayout/>
    }
]);

export {
    routes
}