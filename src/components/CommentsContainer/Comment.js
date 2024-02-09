import css from "./Comment.module.css"
const Comment = ({comment}) => {
    const {postId,id,name,email,body} = comment;
    return (
        <div className={css.comment}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <h4>name: {name}</h4>
            <h6>email: {email}</h6>
            <p className={css.text}>body: {body}</p>
        </div>
    );
};

export {Comment};