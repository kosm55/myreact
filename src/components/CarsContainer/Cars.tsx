import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Car} from "./Car";
import {carAction} from "../../redux";

const Cars = () => {
    const {cars} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carAction.getAll())
    }, []);

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};