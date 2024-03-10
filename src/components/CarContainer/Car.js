import {useDispatch} from "react-redux";
import {carsAction} from "../../store";

const Car = ({car}) => {
    const {id, brand, year, price} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={()=>dispatch(carsAction.setCarForUpdate(car))}>update</button>
            <button onClick={()=>dispatch(carsAction.deleteById({id}))}>delete</button>
        </div>
    );
};

export {Car};