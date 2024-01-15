import {createSlice} from '@reduxjs/toolkit';

const initialState={
    data:[],
}

const cartSlice = createSlice({

    name : 'products',
    initialState,
    reducers:{
        
    }
});
export const {}=productSlice.actions;
export default productSlice.reducer;

export function getProducts(){
    return async function getProductsThunk(dispatch, getState){
        
    }
}