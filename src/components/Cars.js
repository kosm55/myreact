import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../services";
import {carsAction} from "../store";
import {Car} from "./Car";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);


    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carsAction.setResponse(data)))
    }, [dispatch]);

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};