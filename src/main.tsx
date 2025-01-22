import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";

createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}>);