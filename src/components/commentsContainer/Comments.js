import {useLoaderData} from "react-router-dom";

import {Comment} from "./Comment";

const Comments = () => {
    const {data} = useLoaderData();

    return (
        <div>
            {data.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};