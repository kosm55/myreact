import {Launch} from "../Launch/Launch";
import {useEffect, useState} from "react";
import {launchService} from "../../../services/launchService";
import css from "./Launches.module.css"
// import axios from "axios";
// import {axiosService} from "../../../services/axiosService";
// import {urls} from "../../../constants/urls";


const Launches = () => {
    let [launches, setLaunches] = useState([])


    useEffect(() => {
        launchService.getAll().then(({data}) =>setLaunches(data.filter(value => value.launch_year !=='2020')))
    }, []);
    // console.log(launches)
    // console.log(launches.filter(value => value.launch_year !=='2020'))
    return (
        <div className={css.mainDiv}>

            {launches.map(launch=> <Launch key={launch.flight_number} launchItem={launch}/>)}

        </div>
    );
};

export {Launches};