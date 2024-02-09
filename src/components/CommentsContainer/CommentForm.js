import {useForm} from "react-hook-form";
import {commentService} from "../../services/commentService";
import css from "./CommentForm.module.css"


const CommentForm = ({setComments}) => {

    const {reset,register,handleSubmit} = useForm();

    let save=(data)=>{
        // console.log(data)
        commentService.create(data).then(({data})=>setComments(prev=>[...prev, data]))
    }
    return (
        <form onSubmit={handleSubmit(save)} className={css.form}>
            Enter your comment:
            <input className={css.input} type="text" placeholder={'enter id post '} {...register('postId')}/>
            <input className={css.input} type="text" placeholder={'enter name'} {...register('name')}/>
            <input className={css.input} type="text" placeholder={'enter email'} {...register('email')}/>
            <input className={css.input} type="text" placeholder={'enter text'} {...register('body')}/>
            <button className={css.but}>save comment</button>
        </form>
    );
};

export {CommentForm};