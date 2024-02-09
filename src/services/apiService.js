import axios from "axios";
import {baseUrlUsers} from "../constants/urls";

const apiServiceUsers = axios.create({baseURL: baseUrlUsers});

export {
    apiServiceUsers
}

