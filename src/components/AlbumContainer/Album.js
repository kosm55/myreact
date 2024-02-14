import {useNavigate} from "react-router-dom";

const Album = ({album}) => {
    const {id,title} = album;
    const navigate = useNavigate();
    return (
        <div>
            <div>album number {id} of albumId {id}:</div>
            <div>title: {title}</div>
            <button onClick={()=>navigate('photos', {state: {id}})}>show album</button>
        </div>
    );
};

export {Album};