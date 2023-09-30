import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:false,
    reducers:{
        setSidebar:(state,action)=>{
            return state = action.payload;
        },
        
    }
})

export const {setSidebar} = sidebarSlice.actions
export default sidebarSlice.reducer;


