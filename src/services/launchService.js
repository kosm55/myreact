import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const launchService={
    getAll:()=>axiosService(urls.launches.base),
    getById: (flight_number)=>axiosService(urls.launches.byNumber(flight_number))
}
export {launchService}