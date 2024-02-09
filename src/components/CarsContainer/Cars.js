import {Car} from "./Car";

const Cars = ({cars, setCarForUpdate, deleteCar}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} deleteCar={deleteCar}/>)}
        </div>
    );
};

export {Cars};