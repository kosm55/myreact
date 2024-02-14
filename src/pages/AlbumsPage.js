import {Albums} from "../components/AlbumContainer/Albums";
import {Outlet} from "react-router-dom";

const AlbumsPage = () => {
    return (
        <div>
            <Albums/>
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};