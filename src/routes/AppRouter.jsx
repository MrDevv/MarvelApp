import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../features/inicio/HomePage";
import { PersonajesPage } from "../features/personajes/PersonajesPage";
import { ComicsPage } from "../features/series/ComicsPage";
import { MarvelAppRoutes } from "./MarvelAppRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MarvelAppRoutes/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/:character',
                element: <PersonajesPage/>
            },
            {
                path: 'series',
                element: <ComicsPage/>
            }
        ]
    }
])

export const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    )
}