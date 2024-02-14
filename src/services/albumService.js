import {axiosService} from "./apiService";
import {urls} from "../constants/urls";

const albumService={
    getAll: ()=> axiosService.get(urls.albums.base),
    getById: (id) => axiosService.get(urls.albums.getPhotoByAlbumId(id))
}

export {
    albumService
}