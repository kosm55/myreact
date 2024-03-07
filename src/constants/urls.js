const baseURL= 'https://rickandmortyapi.com/api'

const characters= '/character'
const episodes= '/episode'

const urls={
    characters: {
        base: characters,
        byId: (ids)=> `${characters}/${ids}`
    },
    episodes: {
        base: episodes,
        byId: (id)=> `${episodes}/${id}`
    }
}

export {
    baseURL,
    urls
}