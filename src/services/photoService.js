import {axiosService} from "./apiService";
import {urls} from "../constants/urls";

const photoService={
    getAll:()=>axiosService.get(urls.photos.base)
}
export {
    photoService
}