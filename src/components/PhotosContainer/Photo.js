const Photo = ({photo}) => {
    const {albumId,id,title,url,thumbnailUrl} = photo;
    return (
        <div>
            <div>albumId: {albumId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>url: </div>
            <img src={url} alt={title}/>
            <img src={thumbnailUrl} alt={title}/>

        </div>
    );
};

export {Photo};