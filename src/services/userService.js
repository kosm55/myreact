import {apiServiceUsers} from "./apiService";
import {urlsUser} from "../constants/urls";

const userService={
    getAll: ()=>apiServiceUsers.get(urlsUser.users),
    create: (data)=>apiServiceUsers.post(urlsUser.users, data)
}

export {
    userService
}