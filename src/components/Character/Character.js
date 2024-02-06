const Character = ({characterItem}) => {
    let {id, name,status,species,gender,image} = characterItem;
    return (
        <div>
            <h2>{id}) {name}</h2>
            <h3>status:{status}</h3>
            <h3>species:{species}</h3>
            <h3>gender: {gender}</h3>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};