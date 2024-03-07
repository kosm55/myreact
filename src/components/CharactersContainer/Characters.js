import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {charactersAction} from "../../store";
import {Character} from "./Character";

const Characters = () => {
    const {state: {characters}} = useLocation();
    const {charactersOfEpisode} = useSelector(state => state.characters);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ids=characters.map(item=> item.substring(42))

    useEffect(() => {
        dispatch(charactersAction.getByIdCharacter(ids))
    }, [dispatch, characters]);




    return (
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
            {charactersOfEpisode.map(character=> <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};