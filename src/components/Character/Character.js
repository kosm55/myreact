import css from "./Character.module.css"
const Character = ({characterItem,setDet}) => {
    let { name,image} = characterItem;
    return (
        <div className={css.characterDiv}>
            <div className={css.blockAction}>
                <h2> {name}</h2>
                <button className={css.but} onClick={()=>setDet(characterItem)}>more info</button>
            </div>
            <img className={css.image} src={image} alt={name}/>


        </div>
    );
};

export {Character};