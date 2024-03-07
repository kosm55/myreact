import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersService} from "../../services";

const initialState = {
    charactersOfEpisode: []
};

const getByIdCharacter= createAsyncThunk(
    'charactersSlice/getById',
    async ({ids}, thunkAPI)=>{
        try {
            const {data} = await charactersService.getById(ids);
            return data

        }catch (e){
            const error=e.response.data
            return thunkAPI.rejectWithValue(error)
        }
    }
)
const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {
        setCharacterById: (state, action)=>{
            state.charactersOfEpisode= action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getByIdCharacter.fulfilled, (state, action)=>{
                state.charactersOfEpisode=action.payload
            })
    }
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersAction ={
    ...actions,
    getByIdCharacter
}

export {
    charactersReducer,
    charactersAction
}