import {createSlice} from '@reduxjs/toolkit';

//set initial state of the app
// const initialStateValue = {}

export const signupSlice = createSlice({
    name:'user',
    initialState:{
        value: {}
    },
    reducers :{
        setUser :(state, action)=>{
            // state.value = action.payload;
            state.user = action.payload;
        },
    }
})

export const {setUser} = signupSlice.actions
export default signupSlice.reducer;