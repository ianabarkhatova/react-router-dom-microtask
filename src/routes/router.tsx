import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link, useLocation,
} from "react-router-dom";
import App, {NotFound} from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    MODEL: '/:model/:id',
    PRICES: '/prices',
    ERROR404: '/error404',
} as const // значение св-ва не может быть изменено

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
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

        ]
    },
]);