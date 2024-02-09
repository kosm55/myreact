import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";
import css from "./UserForm.module.css"

const UserForm = ({setUs}) => {
    const {reset, register, handleSubmit} = useForm();

    const save=(newUser)=>{
        userService.create(newUser).then(({data})=> setUs(prev=>[...prev, data]))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)} className={css.form}>
            <label className={css.label}>
                <h4>Enter user:</h4>
                <input className={css.input} type="text" placeholder={'enter id'} {...register('id')}/>
                <input  className={css.input} type="text" placeholder={'enter name'} {...register('name')}/>
                <input  className={css.input} type="text" placeholder={'enter username'} {...register('username')}/>
                <input  className={css.input} type="text" placeholder={'enter email'} {...register('email')}/>

                <label className={css.labelAdress}>address
                    <input  className={css.input} type="text" placeholder={'enter street'} {...register('address.street')}/>
                    <input  className={css.input} type="text" placeholder={'enter suite'} {...register('address.suite')}/>
                    <input  className={css.input} type="text" placeholder={'enter city'} {...register('address.city')}/>
                    <input  className={css.input} type="text" placeholder={'enter zipcode'} {...register('address.zipcode')}/>
                    <label>Geo:
                        <input  className={css.input} type="text" placeholder={'enter lat'} {...register('address.geo.lat')}/>
                        <input  className={css.input} type="text" placeholder={'enter lng'} {...register('address.geo.lng')}/>
                    </label>
                </label>
                <input  className={css.input} type="text" placeholder={'enter phone'} {...register('phone')}/>
                <input  className={css.input} type="text" placeholder={'enter website'} {...register('website')}/>
                <label>Company:
                    <input  className ={css.input} type="text" placeholder={'enter name'} {...register('company.name')}/>
                    <input  className ={css.input} type="text" placeholder={'enter catchPhrase'} {...register('company.catchPhrase')}/>
                    <input  className ={css.input} type="text" placeholder={'enter bs'} {...register('company.bs')}/>
                </label>
            </label>
            <button className={css.but}>save</button>
        </form>
    );
};

export {UserForm};