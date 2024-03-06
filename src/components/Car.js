import {useDispatch} from "react-redux";

import {carService} from "../services";
import {carsAction} from "../store";

const Car = ({car}) => {
    const {id, brand, year, price} = car;

    const dispatch = useDispatch();


    const deleteCar = async ()=>{
         await carService.delete(id)
        dispatch(carsAction.deleteCar(id))
    }


    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={()=> dispatch(carsAction.setUpdateCar(car))}>update</button>
            <button onClick={deleteCar}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};