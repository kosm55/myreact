import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {Character} from "./Character";
import {charactersService} from "../../services";


const Characters = () => {
    const {state: {characters}} = useLocation();

    const [chapOne, setChapOne] = useState([])
    useEffect(() => {
        charactersService.getById(characters.map(item=> item.substring(42))).then(({data})=>setChapOne(data))
    }, [characters]);

    return (
        <div>
            {chapOne.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};