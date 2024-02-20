import {apiService} from "./apiService";
import {urls} from "../constants";

const episodesService={
    getAll: ()=> apiService.get(urls.episodes.base)
}

export {
    episodesService
}