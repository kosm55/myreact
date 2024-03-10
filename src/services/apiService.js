import axios from "axios";

import {baseURL} from "../constatnts";

const apiService = axios.create({baseURL: baseURL});

export {
    apiService
}