import {urls} from "../constants/urls";
import {axiosService} from "./axiosService";

const carService={
    getAll: ()=> axiosService(urls.cars.base),
    // getById: (id)=> axiosService(urls.cars.byId(id))
}
export {carService}