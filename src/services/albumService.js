import {axiosService} from "./apiService";
import {urls} from "../constants/urls";

const albumService={
    getAll: ()=> axiosService.get(urls.albums)
}
export {
    albumService
}