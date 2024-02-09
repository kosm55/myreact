import {apiServiceCars} from "./apiService";
import {urlsCar} from "../constants/urls";

const carService = {
    getAll: () => apiServiceCars.get(urlsCar.cars.base),
    create: (data) => apiServiceCars.post(urlsCar.cars.base, data),
    updateById: (id, data) => apiServiceCars.put(urlsCar.cars.byId(id), data),
    deleteById: (id) => apiServiceCars.delete(urlsCar.cars.byId(id))
}

export {
    carService
}