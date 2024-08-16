import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    // initial state
    initialState: {
        items:[]
    },
 
    // reducer functions
    reducers: {
        addItem: (state,action) =>{
          state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items.length;
        }
    }

});

export const {} = cartSlice.actions; 
export default cartSlice.reducer;