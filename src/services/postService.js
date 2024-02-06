import {axiosService} from "./axiosServices";
import {urls} from "../constants/urls";

const postService={
    getAll: ()=> axiosService(urls.posts.base),
    getById:(id)=>axiosService(urls.posts.byId(id))
}

export {postService}