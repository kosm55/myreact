import {configureStore} from "@reduxjs/toolkit";

import {loadingReducer, authReducer, carReducer} from "./slices";


let store = configureStore({
    reducer: {
        loadingReducer,
        auth: authReducer,
        cars: carReducer
    }
});

export {
    store
}