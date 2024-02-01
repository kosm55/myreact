// import {simpsons} from "../data/data";

const CharacterSimpson = ({item}) => {
const {id,name,surname,age,info,photo}=item
    return (
        <div>
            <h2>{id}) {name} {surname}</h2>
            <h3>age: {age}</h3>
            <p>{info}</p>
            <img src={photo} alt={name}/>
            <hr/>
        </div>
    );
};

export {CharacterSimpson};