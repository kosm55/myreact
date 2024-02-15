import {Outlet, useLoaderData} from "react-router-dom";

import {PostDetails} from "../components/postsContainer/PostDetails";

const PostDetailsPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            <PostDetails potsDetails={data}/>
            <Outlet/>
        </div>

    );
};

export {PostDetailsPage};