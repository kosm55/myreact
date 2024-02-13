import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";
import {ErrorsPage} from "./pages/ErrorsPage";


const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, errorElement:<ErrorsPage/>, children: [
            {
                index:true, element: <Navigate to={'todos'}/>
            },
            {
                path: 'todos', element:<TodosPage/>
            },
            {
                path: 'albums', element: <AlbumsPage/>
            },

            {
                path: 'comments', element: <CommentsPage/>
            },
            {
                path: `posts`, element: <PostsPage/>
            }
        ]
    }

])

export {
    router
}