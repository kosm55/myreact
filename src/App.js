import {CommentsContainer} from "./components/CommentsContainer/CommentsContainer";
import {UsersContainer} from "./components/UsersContainer/UsersContainer";
import {CarsContainer} from "./components/CarsContainer/CarsContainer";

const App = () => {
    return (
        <div>
            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на https://jsonplaceholder.typicode.com/users*/}
            {/*<UsersContainer/>*/}

            {/*Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на https://jsonplaceholder.typicode.com/comments*/}

            {/*<CommentsContainer/>*/}

            {/*http://owu.linkpc.net/carsAPI/v1/doc*/}
            {/*Реалізувати створення, видалення та оновлення машин*/}
            <CarsContainer/>


        </div>
    );
};

export {App};