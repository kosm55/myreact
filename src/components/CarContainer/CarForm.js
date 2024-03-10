import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carsAction} from "../../store";

const CarForm = () => {
    const {register,handleSubmit,reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }
    }, [carForUpdate, setValue]);


    const save= async (car)=>{
        dispatch(carsAction.create({car}))
        reset()
    }
    const update=async (car)=>{
        dispatch(carsAction.updateById({id: carForUpdate.id, carData: car}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate? update:save)}>
            <input type="text" placeholder={"brand"} {...register('brand')}/>
            <input type="text" placeholder={"price"} {...register('price')}/>
            <input type="text" placeholder={"year"} {...register('year')}/>
            <button>{carForUpdate? "update": 'save'}</button>
        </form>
    );
};

export {CarForm};