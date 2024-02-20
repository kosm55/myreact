import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {EpisodesPage,CharactersPage} from "./pages";

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
                path:'characters', element: <CharactersPage/>
            }
        ]
    }
]);

export {
    router
}