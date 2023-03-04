import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layouts";
import Login from "../components/Login";
import GeneradorQR from "../components/GeneradorQR";
import NotFound from "../pages/NotFound";

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "generador",
                element: <GeneradorQR />,
            },
        ],
    },
]);
