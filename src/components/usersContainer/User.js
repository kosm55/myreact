import {useNavigate} from "react-router-dom";

import css from "./User.module.css"

const User = ({user}) => {
    const {id, name} = user;

    const navigate = useNavigate();

    return (
        <div className={css.user}>
            <div>{id}) {name}</div>
            <button className={css.button} onClick={()=>navigate(user.id.toString(), {state: {user}})}>more about user</button>
        </div>
    );
};

export {User};