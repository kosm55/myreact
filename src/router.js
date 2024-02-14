import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {PhotosPage} from "./pages/PhotosPage";

const router = createBrowserRouter([
    {
        path: '', element:<MainLayout/>, children:[
            {
                path: 'posts', element: <PostsPage/>, children:[
                    {
                        path: 'users', element:<UsersPage/>
                    },
                    {
                        path:'comments', element: <CommentsPage/>
                    }
                ]
            }

        ]
    },
    {
        path: 'albums', element: <AlbumsPage/>, children: [
            {
                path: 'photos', element: <PhotosPage/>
            }
        ]
    }
])



export {
    router
}