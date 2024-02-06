
import {Posts} from "./components/PostsContainer/Posts/Posts";

const App = () => {

    return (
        <div>
            {/*з jsonplaceholder отримати всі пости в компоненту Posts.js*/}
            {/*відобразити кожного інформацію (id,title) з кожного поста (компонента Post)*/}
            {/*Зробити кнопку вибора поста, при натисканні на яку в PostDetails.js ви покажете детальну інфомацію про пост(всю інфу)*/}
            <Posts/>
        </div>
    );
};

export {App};