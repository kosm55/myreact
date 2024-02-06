import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";

const characterService={
    getAll:    ()=> axiosServices(urls.characters.base),
    getById: (id)=> axiosServices(urls.characters.byId(id))
}
export {characterService}