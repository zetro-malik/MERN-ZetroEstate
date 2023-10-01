import {createSlice} from '@reduxjs/toolkit';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initState = {
    currentUser: null,
    error:null,
    loading:false,
}

const userSlice = createSlice({
    name:'user',
    initialState:initState,
    reducers:{
        signInStart : (state) =>{
            state.loading = true;
        },
        signInSuccess : (state, action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
            toast.success("Logged In", {
                position: toast.POSITION.TOP_RIGHT,
              })
        },
        signInError : (state, action) =>{
            state.error = action.payload;
            state.loading = false;
            toast.error(action.payload, {
                position: toast.POSITION.TOP_RIGHT,
              })
        }
    }
})


export const {signInStart, signInSuccess, signInError} = userSlice.actions;

export default userSlice.reducer;
