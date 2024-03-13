import css from "./Header.module.css"
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authAction} from "../../redux";
import {useEffect} from "react";

const Header = () => {
    const {currentUser} = useAppSelector(state => state.auth);
    const access = authService.getAccessToken();
    const dispatch = useAppDispatch();

    const formatLastLogin = (lastLogin: string) => {
        const date = new Date(lastLogin);
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (access && !currentUser){
            dispatch(authAction.me())
        }
    }, []);


    return (
        <div className={css.Header}>
            <div>
                <h1>CARS</h1>
            </div>
            {
                currentUser
                    ?
                    // <div>{currentUser.username} - {currentUser.last_login} </div>
                    <div>{currentUser.username} - {formatLastLogin(currentUser.last_login)} </div>
                    :
                    <div className={css.tools}>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
            }
        </div>
    );
};

export {Header};