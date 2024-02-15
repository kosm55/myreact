import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {Post} from "./Post";
import {userService} from "../../services/userService";
import css from"./Posts.module.css"


const Posts = () => {
    const [posts, setPosts] = useState([])

    const {state: {id}} = useLocation();

    useEffect(() => {
        userService.getPostsById(id).then(({data})=>setPosts(data))
    }, [id]);

    return (
        <div className={css.posts}>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};