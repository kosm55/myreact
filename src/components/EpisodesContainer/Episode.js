import {useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    const {id, name, episode:chapter,characters} = episode;
    const navigate = useNavigate();

    return (
        <div>
            <div onClick={()=>navigate(`characters`, {state: {characters}})}>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>chapter: {chapter}</div>
            </div>
        </div>
    );
};

export {Episode};