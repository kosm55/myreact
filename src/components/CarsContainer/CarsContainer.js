import {useEffect, useState} from "react";
import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)


    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);

    const deleteCar= async (id)=>{
        await carService.deleteById(id)
        setTrigger(prev=>!prev)

    }

    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate}  />
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} deleteCar={deleteCar}/>
        </div>
    );
};

export {CarsContainer};