import {useDispatch} from "react-redux";

import {carService} from "../services";
import {carsAction} from "../store";

const Car = ({car}) => {
    const {id, brand, year, price} = car;

    const dispatch = useDispatch();


    const deleteCar = ()=>{
         carService.delete(id).then(({data})=>dispatch(carsAction.deleteCar(id)))
    }


    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button>update</button>
            <button onClick={deleteCar}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};