const baseURL='https://jsonplaceholder.typicode.com'

const albums='/albums'
const photos='/photos'

const urls={
    photos:{
        base:photos,
        byId: (id)=> `${photos}/${id}`
    },
    albums:{
        base:albums,
        byId: (id)=> `${albums}/${id}`,
        getPhotoByAlbumId: (id) => `${albums}/${id}/photos`
    }
};
export {
    baseURL,
    urls
}