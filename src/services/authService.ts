import {ITokens, IUser} from "../interfaces";
import {IRes} from "../types";
import {urls} from "../constants";
import {apiService} from "./apiService";


const accessTokenKey= 'access'
const refreshTokenKey= "refresh"


const authService={
    register(user: IUser):IRes<IUser>{
        return apiService.post(urls.auth.register, user)
    },
    me():IRes<IUser>{
        return apiService.get(urls.auth.me)
    },
    setTokens({access, refresh}:ITokens): void{
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey,refresh)
    },
    getAccessToken():string{
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken():string{
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokensKey():void{
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }

}