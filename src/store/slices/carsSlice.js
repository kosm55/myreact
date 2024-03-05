import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: []
};
const carsSlice= createSlice({
    name: 'createSlice',
    initialState: initialState,
    reducers: {
        setResponse: (state, action)=>{
            state.cars= action.payload
        },
        createCar: (state, action) =>{
            state.cars.push(action.payload)
        },
        updateCar: (state, action) =>{
            state.cars=state.cars.map(item=> {
                if (item.id===action.payload.id){
                     return action.payload
                }
                return item
            })
        },
        deleteCar: (state, action) =>{
            state.cars= state.cars.filter((item)=>item.id !== action.payload)
        }
    }
})

const {reducer: carsReducer, actions} = carsSlice;

const carsAction={
    ...actions
}

export {
    carsReducer,
    carsAction
}

