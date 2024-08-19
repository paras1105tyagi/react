import { createSlice ,current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    // initial state
    initialState: {
        items:[]
    },
 
    // reducer functions
    reducers: {
        addItem: (state,action) =>{
            // mutating the state
          state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state)=>{
            console.log(current(state));
            state.items.length = 0;
            // or we can do
            // return {items: []};
        }
    }

});

export const{addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;


