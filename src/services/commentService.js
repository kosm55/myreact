import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService={
    getCommentsById: (postId)=>apiService.get(urls.posts.getCommentsByPostId(postId))
}
export {
    commentService
}