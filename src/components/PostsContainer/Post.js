import css from "./Post.module.css"
const Post = ({post}) => {
    const {id, title,body} = post;
    return (
        <div className={css.Post}>
            <div>post number: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};