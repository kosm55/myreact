
const baseUrlRick='https://rickandmortyapi.com/api'

const characters=`/character`
const urls={
    characters:{
        base:characters,
        byId: (id)=> `${characters}/${id}`
    }
}
export {baseUrlRick,urls}