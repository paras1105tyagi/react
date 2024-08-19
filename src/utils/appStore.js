import { configureStore } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
const appStore = configureStore({

    // big reducer(app reducer)
reducer:{
    cart: createReducer,

}
});


export default appStore;