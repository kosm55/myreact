const CharacterRickAndMorty = ({item}) => {
    let {id,name,status,species,gender,image}=item
    return (
        <div>
            <h2>{id}) {name}</h2>
            <h2>{status}</h2>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {CharacterRickAndMorty};