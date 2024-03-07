import {apiService} from "./apiService";
import {urls} from "../constants";

const charactersService={
    // getAll: ()=> apiService.get(urls.characters.base)
    getById: (ids)=> apiService.get(urls.characters.byId(ids))
}

export {
    charactersService
}