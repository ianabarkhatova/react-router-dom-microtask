import * as React from "react";
import {
    createBrowserRouter, Navigate, Outlet, RouteObject
} from "react-router-dom";
import App, {NotFound, PATH} from "../App";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Error404} from "../components/pages/Error404";
import {Login} from "../components/pages/Login";

const publicRoutes: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path: PATH.ERROR404,
        element: <Error404/>,
    },
    {
        path: PATH.MAIN,
        element: <Adidas/>,
    },
    {
        path: PATH.LOGIN,
        element: <Login/>,
    },
]

const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED_PAGE,
        element: <ProtectedPage/>
    }
]

const PrivateRoutes = () => {
    const isAuth = false

    return isAuth
        ? <>{Outlet}</>
        : <Navigate to={PATH.LOGIN}/>
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR404}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    },
]);