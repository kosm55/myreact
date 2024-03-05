import {apiService} from "./apiService";
import {urls} from "../constans";

const charactersService={
    getAll: (page)=> apiService.get(urls.characters, {params: {page}})
}

export {
    charactersService
}