

import {rickAndMorty, simpsons} from "./data/data";
import {CharacterSimpson} from "./components/CharacterSimpson";
import {CharacterRickAndMorty} from "./components/CharacterRickAndMorty";

const App = () => {


    return (
        <div>
            <h1>TASK 1 </h1>
            <hr/>
            {/*1. Описати всю сім'ю сімпсонів (5 персонажів)*/}
            <div>
            {
                simpsons.map(character=>(
                    <CharacterSimpson item={character} key={character.id}/>
                ))
            }
            </div>
            <h1>TASK 2</h1>
            <hr/>
            {/*-----------------------------------------------------------------------------*/}
            {/*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі*/}
            {/*https://rickandmortyapi.com/*/}
            {/*https://rickandmortyapi.com/api/character*/}
            {/*Створити 6 персонажів*/}
            <div>
                {

                  rickAndMorty.map(person=>(
                      <CharacterRickAndMorty item={person} key={person.id}/>
                  ))
                }
            </div>
        </div>
    );
};

export {App};