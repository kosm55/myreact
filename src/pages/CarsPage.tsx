import {Cars} from "../components";
import {CarsForm} from "../components/CarsContainer/CarsForm";

const CarsPage = () => {
    return (
        <div>
            <CarsForm/>
            <Cars/>
        </div>
    );
};

export {CarsPage};