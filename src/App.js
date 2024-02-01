import {Character} from "./components/Character";


const App = () => {
    const characters=[
        {
            id:1,
            name:'Rick',
            img:'https://i.pinimg.com/736x/43/3f/7f/433f7f2884fe508779781d406c78fdbb.jpg'
        },
        {
            id:2,
            name: 'Morty',
            img:'https://ovicio.com.br/wp-content/uploads/2022/10/20221010-ovicio-hiato-de-rick-e-morty-6a-temporada-555x555.png'
        }
    ]
    return (
        <div>
            {characters.map(item=><Character character={item} key={item.id}/>)}
        </div>
    );
};

export {App};