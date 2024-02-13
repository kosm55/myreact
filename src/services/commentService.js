import {axiosService} from "./apiService";
import {urls} from "../constants/urls";

const commentService= {
    getAll: ()=> axiosService.get(urls.comments),
    getPostById: (postId)=> axiosService.get(urls.posts.getPostByPostId(postId))
}

export {
    commentService
}