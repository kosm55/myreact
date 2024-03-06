import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carService} from "../services";
import {carsAction} from "../store";


const CarForm = () => {
    const {register, handleSubmit, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate){
            setValue('price', carForUpdate.price)
            setValue('brand', carForUpdate.brand)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const save= async  (car)=>{
        await carService.create(car)
        dispatch(carsAction.createCar(car))
        dispatch(carsAction.setTrigger())
        reset()
    }

    const update= async (car)=>{
        await carService.update(carForUpdate.id, car)
        dispatch(carsAction.setUpdateCar(null))
        dispatch(carsAction.setTrigger())
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate? update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate? "update":"save"}</button>
        </form>
    );
};

export {CarForm};