import {useEffect, useState} from "react";

import {episodesService} from "../../services";
import {Episode} from "./Episode";
import css from "./Episodes.module.css"
import {usePageQuery} from "../../hooks/usePageQuery";
import {useAppContext} from "../../hooks";


const Episodes = () => {

    const [episodes, setEpisodes] = useState({ prev: null, next: null, results: []})
    const {page, prevPage, nextPage} = usePageQuery();




    useEffect(() => {
        episodesService.getAll(page).then(({data})=> setEpisodes(()=> {
            const {info: {next,prev}, results}=data
            return {next ,prev, results}
        }))
    }, [page]);


    return (
        <div>
            <div  className={css.episodeDiv}>
                {episodes.results.map(episode=> <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttonDiv}>
                <button disabled={!episodes.prev} onClick={prevPage}>prev</button>
                <button disabled={!episodes.next} onClick={nextPage}>next</button>
            </div>

        </div>
    );
}

export {Episodes};