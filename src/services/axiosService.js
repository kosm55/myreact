import axios from "axios";
import {baseUrlCars} from "../constants/urls";

const axiosService = axios.create({baseURL: baseUrlCars});

export {axiosService}