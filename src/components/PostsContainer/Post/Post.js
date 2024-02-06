import css from "./Post.module.css"
const Post = ({post,currPost}) => {
    const {id,title}=post
    return (
        <div className={css.Post}>
            <div>id : {id}</div>
            <h3>title : {title}</h3>
            <button className={css.button} onClick={()=>currPost(post)}>Details</button>
        </div>

    );
};

export {Post};