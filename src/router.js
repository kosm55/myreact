import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {postService} from "./services/postService";
import {commentService} from "./services/commentService";




const router = createBrowserRouter([

    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'users/:id', element: <UserDetailsPage/>, children:[
                    {
                        path: 'posts', element: <PostsPage/>
                    }
                ]
            },
            {
                path:'posts/:id', element: <PostDetailsPage/>, loader: ({params: {id}})=>postService.getById(id), children:[
                    {
                        path: '', element: <CommentsPage/>, loader: ({params:{id}})=>commentService.getCommentsById(id)
                    }
                ]
            }


        ]
    }
]);

export {
    router
}