import {useSearchParams} from "react-router-dom";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')

    return {
        page,

        prevPage: () => {
            setQuery(prevState => {
                prevState.set('page', (+prevState.get('page') - 1).toString())
                return prevState
            })
        },

        nextPage: () => {
            setQuery(prevState => {
                prevState.set('page', (+prevState.get('page') + 1).toString())
                return prevState
            })
        }
    }
}

export {
    usePageQuery
}