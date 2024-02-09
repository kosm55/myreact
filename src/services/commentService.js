import {apiServiceUsers} from "./apiService";
import {urlsComment} from "../constants/urls";

const commentService={
    getAll: ()=> apiServiceUsers.get(urlsComment.comments),
    create: (data)=>apiServiceUsers.post(urlsComment.comments, data)
}

export {
    commentService
}