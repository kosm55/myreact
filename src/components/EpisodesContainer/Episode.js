import {useNavigate} from "react-router-dom";

import css from "./Episode.module.css"
import {useAppContext} from "../../hooks";

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const [, setName] = useAppContext();
    const navigate = useNavigate();

    const clickBut=()=>{
        navigate('/characters', {state: {characters}})
        setName(name)
    }

    return (
        <div onClick={clickBut} className={css.episode}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};