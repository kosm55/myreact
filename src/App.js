import {Launches} from "./LaunchesContainer/components/Launches/Launches";

const App = () => {
    return (
        <div>
            {/*є API от SpaceX*/}
            {/*https://api.spacexdata.com/v3/launches/*/}
            {/*потрібно вивести всі запуски кораблів окрім 2020 року*/}
            {/*репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)*/}
            <Launches/>
        </div>
    );
};

export {App};