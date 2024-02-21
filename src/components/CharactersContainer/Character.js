const Character = ({chapterOfEpisode}) => {
    const {id, name, image} = chapterOfEpisode;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};