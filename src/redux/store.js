import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./reducers/userReducer"
import sidebarReducer from "./reducers/sidebarReducer"
import updateBlogReducer from "./reducers/updateBlogReducer";

const store = configureStore ({
    reducer:{
        user:userReducer,
        sidebar:sidebarReducer,
        updateblog:updateBlogReducer,
    }
})

export default store ;