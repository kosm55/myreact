import {useEffect, useState} from "react";
import {carService} from "../../services/carServise";

const Cars = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.getAll().then(data => setCars(data))
    }, []);

    return (
        <div>
            {console.log(cars)}
        </div>
    );
};

export {Cars};