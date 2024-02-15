import {useNavigate} from "react-router-dom";

import css from "./post.module.css"

const Post = ({post}) => {
    const {id,userId, title} = post;

    const navigate = useNavigate();

    return (
        <div className={css.post}>
            <div>post id:{id} id:{userId}</div>
            <div>title: {title}</div>
            <button className={css.button} onClick={()=>navigate(`/posts/${id}`)}>post details</button>
        </div>
    );
};

export {Post};