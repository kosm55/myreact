import {useEffect, useState} from "react";
import {Character} from "../Character/Character";
import {characterService} from "../../services/characterService";
import {CharactersDetails} from "../CharacterDetails/CharactersDetails";
import css from "./Characters.module.css"

const Characters = () => {

    const [characters, setCharacters] = useState([])
    const [characterDetails, setCharacterDetails] = useState(null)

    useEffect(() => {
        characterService.getAll().then(({data})=>setCharacters(data.results))
    }, []);
    return (
        <div className={css.charactersMain}>
            <div>
                {characters.map(character=> <Character key={character.id} characterItem={character} setDet={setCharacterDetails}/>)}
            </div>


            {characterDetails && <CharactersDetails details={characterDetails}/>}
        </div>
    );
};

export {Characters};