import {Post} from "../Post/Post";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../../../services/axiosServices";
import {urls} from "../../../constants/urls";
import {postService} from "../../../services/postService";
import {post} from "axios";
import {PostDetails} from "../PostDetails/PostDetails";
import css from "./Posts.module.css"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getCurrentPost=(post)=>{
        setPostDetails(post)
    }

    return (
        <div className={css.Posts}>
            <div>{posts.map(post => <Post key={post.id} post={post} currPost={getCurrentPost}/>)}</div>


            {postDetails && <PostDetails postDet={postDetails}/>}
        </div>
    );
};

export {Posts};