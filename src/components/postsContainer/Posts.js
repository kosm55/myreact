import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {postService} from "../../services/postService";
import {Post} from "./Post";


const Posts = () => {
    const [posts, setPosts] = useState([])
    const {state: {userDetails}} = useLocation();
    useEffect(() => {
        postService.getAll().then(({data})=>setPosts(data))
    }, []);
    console.log(posts)
    return (
        <div>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};