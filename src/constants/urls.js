
const baseUrlCars='http://owu.linkpc.net/carsAPI/v1'

const cars='/cars'

const urls={
    cars:{
        base:cars,
        byId: `${cars}/${id}`
    }
}
export {baseUrlCars,urls}