import axios from "axios";
import {baseUrlRick} from "../constants/urls";

const axiosServices=axios.create({baseURL: baseUrlRick})

export {axiosServices}