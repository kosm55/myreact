import {useNavigate} from "react-router-dom";

import css from "./Comment.module.css"

const Comment = ({comment}) => {
    const {id,postId, name,email,body} = comment;
    const navigate = useNavigate();
    return (
        <div className={css.Comment}>
            <div>Comment {id}: </div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button className={css.button} onClick={()=>navigate('/posts', {state: {postId}})}>read post</button>
        </div>
    );
};

export {Comment};