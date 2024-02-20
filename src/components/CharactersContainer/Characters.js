import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

import {Character} from "./Character";
import {charactersService} from "../../services";


const Characters = () => {
    const {state: {characters}} = useLocation();
    const navigate = useNavigate();

    const [chapOne, setChapOne] = useState([])
    useEffect(() => {
        charactersService.getById(characters.map(item=> item.substring(42))).then(({data})=>setChapOne(data))
    }, [characters]);

    return (
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
            {chapOne.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};