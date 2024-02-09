//----- urls for user & comments
const baseUrlUsers='https://jsonplaceholder.typicode.com'

const users='/users'
const urlsUser={
    users
}

const comments='/comments'
const urlsComment={
    comments
}

//----- urls for cars
const baseUrlCars='http://owu.linkpc.net/carsAPI/v1'
const cars='/cars'
const urlsCar={
    cars:{
        base: cars,
        byId: (id)=> `${cars}/${id}`
    }
}


export {
    baseUrlUsers,
    urlsUser,
    users,
    comments,
    urlsComment,
    baseUrlCars,
    cars,
    urlsCar
}