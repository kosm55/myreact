import css from "./CharacterDetails.module.css"
const CharactersDetails = ({details}) => {
    let {name,status,species,gender} = details;
    return (
        <div className={css.mainDiv}>

            <h1>info about character:</h1>
            <h2> {name}</h2>
            <hr/>
            <h3>status:{status}</h3>
            <h3>species:{species}</h3>
            <h3>gender: {gender}</h3>
        </div>
    );
};

export {CharactersDetails};