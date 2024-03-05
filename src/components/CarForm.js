import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {carService} from "../services";
import {carsAction} from "../store";

const CarForm = () => {
    const {register,handleSubmit, reset} = useForm();
    const dispatch = useDispatch();


    const save=(car)=>{
        carService.create(car).then(({data})=> dispatch(carsAction.createCar(data)))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export {CarForm};