import css from "../PostDetails/PostDetails.module.css"
const PostDetails = ({postDet}) => {
    let {userId, id,title,body} = postDet;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <h3>title: {title}</h3>
            <p className={css.PostDetails}>body: {body}</p>
        </div>
    );
};

export {PostDetails};