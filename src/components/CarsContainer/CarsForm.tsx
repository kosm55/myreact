import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carAction} from "../../redux";

const CarsForm = () => {
    const {register,handleSubmit,reset} = useForm<ICar>();
    const dispatch = useAppDispatch();



    const save:SubmitHandler<ICar> = async (car)=>{
        await dispatch(carAction.create({car}))
        reset()
    };
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <button>save</button>
        </form>
    );
};

export {CarsForm};