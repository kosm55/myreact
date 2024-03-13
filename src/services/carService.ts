import {ICar, IPagination} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll: (): IRes<IPagination<ICar>> => apiService.get(urls.cars.base),
    create: (car:ICar): IRes<ICar> => apiService.post(urls.cars.base, car)
}

export {
    carService
}