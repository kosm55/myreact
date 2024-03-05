import {Characters, CharactersPagination} from "../components";

const CharactersPage = () => {
    return (
        <div>
            <CharactersPagination/>
            <Characters/>
        </div>
    );
};

export {CharactersPage};