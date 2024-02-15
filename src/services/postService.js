import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postService={
    getById: (userId)=> apiService.get(urls.posts.byId(userId)),
}

export {
    postService
}