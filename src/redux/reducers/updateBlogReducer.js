import { createSlice } from "@reduxjs/toolkit";


const updateBlogSlice = createSlice({

    name:"updateblog",
    initialState:null,
    reducers:{
        setUpdateBlog:(state,action)=>{
            return state = action.payload;
        }
    }
});


export default updateBlogSlice.reducer;
export const {setUpdateBlog} = updateBlogSlice.actions;











