import {useDispatch, useSelector} from "react-redux";

import {carService} from "../services";
import {carsAction} from "../store";

const Car = ({car}) => {
    const {id, brand, year, price} = car;

    const dispatch = useDispatch();
    useSelector(state => state.data)


    const deleteCar = async ()=>{
         await carService.delete(id).then(({data})=>dispatch(carsAction.deleteCar(id)))
    }

    const updateCar= async ()=>{
        await carService.update()
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