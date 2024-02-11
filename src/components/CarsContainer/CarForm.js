import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {useEffect} from "react";

const CarForm = ({setTrigger,  carForUpdate,setCarForUpdate}) => {
    const {reset, register, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: 'all'
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);

    const save = async (car) => {
        if (carForUpdate) {
            await carService.updateById(carForUpdate.id, car)
        } else {
            await carService.create(car)
        }
        setTrigger(prev => !prev)
        reset()
        setCarForUpdate(null)
    }


    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'enter brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'max 1 character'
                }
            })}/>
            <input type="text" placeholder={'enter price'} {...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'min price - 0'},
                max: {value: 1000000, message: "max price- 1000000"}
            })}/>
            <input type="text" placeholder={'enter year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1990, message: "min year - 1990"},
                max: {value: new Date().getFullYear(), message: "max year - current"}
            })}/>
            <button disabled={!isValid}>{carForUpdate ? "update" : "save"}</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}

        </form>
    );
};

export {CarForm};