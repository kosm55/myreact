import {useEffect, useState} from "react";
import {photoService} from "../../services/photoService";
import {useLocation} from "react-router-dom";
import {Photo} from "./Photo";
import {albumService} from "../../services/albumService";

const Photos = () => {
    const [photos, setPhotos] = useState([])
    const {state: {id}} = useLocation();

    useEffect(() => {
        albumService.getById(id).then(({data})=>setPhotos(data))

    }, [id]);
    console.log(photos)
    return (
        <div>
            {photos.map(photo=><Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {Photos};