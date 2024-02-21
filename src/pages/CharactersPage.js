import {Character, Characters} from "../components/CharactersContainer";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {charactersService} from "../services";
import {useAppContext} from "../hooks";

const CharactersPage = () => {
    const {state: {characters}} = useLocation();
    const [chaptersOfEpisode, setChaptersOfEpisode] = useState([])
    const navigate = useNavigate();
    const [, setName] = useAppContext();

    useEffect(() => {
        charactersService.getById(characters.map(item=> item.substring(42))).then(({data})=> setChaptersOfEpisode(data))
    }, [characters]);

    const clickBut=()=>{
        navigate(-1)
        setName(null)
    }
    
    return (
        <div>
            <button onClick={clickBut}>back</button>
            {chaptersOfEpisode.map(item=> <Character key={item.id} chapterOfEpisode={item}/>)}
        </div>
    );
};

export {CharactersPage};