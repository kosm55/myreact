import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {charactersService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {charactersAction} from "../store";
import {Character} from "./Character";

const Characters = () => {
    const [query, serQuery] = useSearchParams({page: ''});
    const page = query.get("page");
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);

    useEffect(() => {
        charactersService.getAll(page).then(({data})=>dispatch(charactersAction.setResponse(data)))
    }, [page]);

    return (
        <div>
            {characters.map(character=> <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};