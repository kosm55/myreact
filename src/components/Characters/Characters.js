import {useEffect, useState} from "react";
import {Character} from "../Character/Character";
import {characterService} from "../../services/characterService";

const Characters = () => {

    const [characters, setCharacters] = useState([])
    const [characterDetails, setCharacterDetails] = useState()

    useEffect(() => {
        characterService.getAll().then(({data})=>setCharacters(data.results))
    }, []);
    return (
        <div>
            {console.log(characters)}
            {characters.map(character=> <Character key={character.id} characterItem={character}/>)}
        </div>
    );
};

export {Characters};