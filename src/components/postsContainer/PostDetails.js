import css from "./PostDetails.module.css"
const PostDetails = ({potsDetails}) => {
    const {id, title, body} = potsDetails;

    return (
        <div className={css.postDEtails}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetails};