import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService={
    getAll: ()=> apiService.get(urls.posts.base),
    getById: (userId)=> apiService.get(urls.posts.byId(userId)),
    getPostsById: (userId)=>apiService.get(urls.posts.getPostsByUserId(userId))
}

export {
    postService
}