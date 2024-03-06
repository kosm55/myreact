import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
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
        setUpdateCar: (state, action) =>{
            state.carForUpdate=action.payload
        },
        setTrigger: (state)=>{
            state.trigger= !state.trigger
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

