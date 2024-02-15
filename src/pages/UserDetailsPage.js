import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../services/userService";
import {UsersDetails} from "../components/usersContainer/UsersDetails";


const UserDetailsPage = () => {
    const {id} = useParams();
    const {state} = useLocation();

    const [userDetails, setUserDetails] = useState(null)
    useEffect(() => {
        if (state?.user){
            setUserDetails(state.user)
        }else{
        userService.getById(id).then(({data})=>setUserDetails(data))
        }
    }, [id, state]);

    return (
        <div>
            {userDetails && <UsersDetails userDetails={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};