import axios from "axios";

import {baseUrlCars, baseUrlUsers} from "../constants/urls";

const apiServiceUsers = axios.create({baseURL: baseUrlUsers});
const apiServiceCars=axios.create({baseURL:baseUrlCars})


export {
    apiServiceUsers,
    apiServiceCars
}

