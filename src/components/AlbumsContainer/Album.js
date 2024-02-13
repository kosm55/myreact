import css from "./Album.module.css"
const Album = ({album}) => {
    const {id, title} = album;
    return (
        <div className={css.Album}>
            <div>album number: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Album};