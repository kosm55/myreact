import {Users} from "./components/UsersContainer/Users";
import {Comments} from "./components/CommentsContainer/Comments";
import {Cars} from "./components/CarsContainer/Cars";
import {CommentsContainer} from "./components/CommentsContainer/CommentsContainer";
import {UsersContainer} from "./components/UsersContainer/UsersContainer";

const App = () => {
    return (
        <div>
            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на https://jsonplaceholder.typicode.com/users*/}
            {/*<UsersContainer/>*/}

            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на https://jsonplaceholder.typicode.com/comments*/}

            <CommentsContainer/>

            {/*http://owu.linkpc.net/carsAPI/v1/doc*/}
            {/*Реалізувати створення, видалення та оновлення машин*/}



        </div>
    );
};

export {App};