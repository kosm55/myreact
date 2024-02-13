import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {commentService} from "../../services/commentService";
import {Post} from "./Post";


const Posts = () => {
    const [posts, setPosts] = useState({})
    const {state: {postId}} = useLocation();

    useEffect(() => {
        commentService.getPostById(postId).then(({data})=>setPosts(data))
    }, [postId]);
    return (
        <div>
            {<Post  post={posts}/>}
        </div>
    );
};

export {Posts};