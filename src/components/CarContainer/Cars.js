import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "./Car";
import {carsAction} from "../../store";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carsAction.getAll())
    }, [trigger, dispatch]);
    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};