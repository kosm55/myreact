import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {episodesService} from "../../services";
import {Episode} from "./Episode";
import css from "./Episodes.module.css"

const Episodes = () => {
    const [episodes, setEpisodes] = useState({results: []})
    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState( {prev: null, next: null})


    useEffect(() => {
        episodesService.getAll(query.get('page')).then(({data})=> {
            setEpisodes(data)
            setPrevNext({prev: data.info.prev, next: data.info.next})
        })
    }, [query.get('page')]);

    const prevPage= ()=>{
        setQuery(prev =>{
            prev.set('page', `${+prev.get('page')-1}`)
            return prev
    })
    }

    const nextPage = ()=>{
        setQuery(prev =>{
            prev.set('page', `${+prev.get('page')+1}`)
            return prev
        })
    }

    return (
        <div >
            <div className={css.episodeDiv}>
                {episodes.results.map(episode=> <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttonDiv}>
                <button disabled={!prevNext.prev} onClick={prevPage}>prev</button>
                <button disabled={!prevNext.next} onClick={nextPage}>next</button>
            </div>


        </div>
    );
};

export {Episodes};