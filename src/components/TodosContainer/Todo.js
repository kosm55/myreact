import css from "./Todo.module.css"
const Todo = ({todo}) => {
    const {id, title, completed} = todo;
    return (
        <div className={css.Todo}>
            <div>Task {id}:</div>
            <div>title: {title}</div>
            <div>completed:
                <input type="checkbox" checked={completed} readOnly/>
            </div>
        </div>
    );
};

export {Todo};