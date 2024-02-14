const Post = ({post}) => {
    const {id,userId, title} = post;
    return (
        <div>
            <div>post id:{id} id:{userId}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Post};