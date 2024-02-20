import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {EpisodesPage} from "./pages";
import {CharactersPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index:true, element: <Navigate to={'episode'}/>
            },
            {
                path:'episode', element: <EpisodesPage/>
            },
            {
                path:':id/characters', element: <CharactersPage/>
            }
        ]
    }

]);

export {
    router
}