import {User} from "./User";
import css from "./Users.module.css"

const Users = ({moreUsers}) => {
    return (
        <div className={css.moreUsers}>
            {moreUsers.map(oneUser=> <User key={oneUser.id} user={oneUser}/>)}
        </div>
    );
};

export {Users};