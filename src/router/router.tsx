import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";

const routes = createBrowserRouter([
    {
        path:'/', element:<MainLayout/>, children: [
            {path:'users', element: <UsersPage/>},
            {path:'posts', element: <PostsPage/>}
        ]
    }
]);

export {
    routes
}