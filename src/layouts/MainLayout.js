import {Outlet} from "react-router-dom";

import css from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div>
            <div className={css.title}>Rick & Morty</div>
            <div><Outlet/></div>
        </div>
    );
};

export {MainLayout};