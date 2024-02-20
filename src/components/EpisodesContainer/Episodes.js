import {useEffect, useState} from "react";

import {episodesService} from "../../services";
import {Episode} from "./Episode";

const Episodes = () => {
    const [episodes, setEpisodes] = useState({results: []})

    useEffect(() => {
        episodesService.getAll().then(({data})=> setEpisodes(data))
    }, []);

    return (
        <div>
            {episodes.results.map(episode=> <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};