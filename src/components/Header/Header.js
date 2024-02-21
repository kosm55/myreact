import css from './Header.module.css'
import {useAppContext} from "../../hooks";
const Header = () => {
    const [name] = useAppContext();
    return (
        <div className={css.Header} >
            {name? (
                <div>
                    <h2>Rick && Morty</h2>
                    <hr/>
                    <h4>{name}</h4>
                </div>

            )  : <h2>Rick && Morty</h2>  }

        </div>
    );
};

export {Header};