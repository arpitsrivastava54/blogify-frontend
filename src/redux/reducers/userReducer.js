import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice(
    {
        name:"user",
        initialState:null,
        reducers:{
            setUser:(state,action)=>{
                return state = action.payload;
            },
            removeUser:(state,action)=>{
                return state = null;
            }
        }
    }
);

export const {removeUser,setUser} = userSlice.actions;
export default userSlice.reducer;







