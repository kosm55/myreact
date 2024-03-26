import {Users} from "./components/Users";
import {useState} from "react";

const App = () => {
    const [flag, setFlag] = useState(true)
    return (
        <div>
            {flag && <Users/>}
            <button onClick={()=>setFlag(prevState => !prevState)}>hide-show</button>
        </div>
    );
};

export {App};