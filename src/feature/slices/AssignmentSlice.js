import {createSlice} from '@reduxjs/toolkit';

//set initial state of the app
const initialStateValue = {}

export const assignmentSlice = createSlice({
    name:'Assignment',
    initialState:{value:initialStateValue},
    reducers :{
        setAssignment :(state, action)=>{
            // state.value = action.payload;
            state.value= action.payload;
        },
    }
})

export const {setAssignment} = assignmentSlice.actions;
export default assignmentSlice.reducer;