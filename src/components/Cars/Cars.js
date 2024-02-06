import {useEffect, useState} from "react";
import {carService} from "../../services/carServise";
import {Car} from "../Car/Car";
import {CarDetails} from "../CarDetails/CarDetails";
import css from "./Cars.module.css"

const Cars = () => {
    const [cars, setCars] = useState([])
    const [carDetails, setCarDetails] = useState(null)

    useEffect(() => {
        carService.getAll().then(data => setCars(data.data))
    }, []);

    return (
        <div className={css.CarsMain}>
            <div className={css.carsDiv}>
                {cars.map(car=> <Car key={car.id} itemCar={car} detCar={setCarDetails}/>)}
            </div>

            <hr/>
            {carDetails && <CarDetails details={carDetails}/>}
        </div>
    );
};

export {Cars};