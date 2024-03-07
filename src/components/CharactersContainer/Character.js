import css from "./Character.module.css"
const Character = ({character}) => {
    const {id, name, status, image} = character;
    return (
        <div className={css.Character}>
            <div className={css.Info}>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>status: {status}</div>
            </div>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Character};