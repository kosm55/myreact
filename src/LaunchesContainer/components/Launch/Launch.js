import css from "./Launch.module.css"

const Launch = ({launchItem}) => {
    const {mission_name,launch_year, links}=launchItem
    return (
        <div className={css.mainDiv}>
            <div>
                <h2>MISSION NAME: {mission_name}</h2>
                <h3>LAUNCH YEAR: {launch_year}</h3>
            </div>

            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};