import {NavLink} from "react-router-dom";

import css from "./Erros.module.css"

const ErrorsPage = () => {
    return (
        <div className={css.Errors}>
            <h1>A samurai has no goal, only a way.</h1>
            <h2>But there is definitely no such way. <br/> error 404</h2>
            <NavLink to={'/'}>come back home</NavLink>
        </div>
    );
};

export {ErrorsPage};