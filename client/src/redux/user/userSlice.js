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
        },
        updateUserStart: (state) => {
            state.loading = true;
          },
          updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
            toast.success("Updated Succesfuly!", {
                position: toast.POSITION.TOP_RIGHT,
              })
          },
          updateUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            toast.error(action.payload, {
                position: toast.POSITION.TOP_RIGHT,
              })
          },
          deleteUserStart: (state) => {
            state.loading = true;
          },
          deleteUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
            toast.success("Deleted Succesfuly!", {
                position: toast.POSITION.TOP_RIGHT,
              })
          },
          deleteUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            toast.error(action.payload, {
                position: toast.POSITION.TOP_RIGHT,
              })
          },
          signOutUserStart: (state) => {
            state.loading = true;
          },
          signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
            toast.success("Signed Out", {
                position: toast.POSITION.TOP_RIGHT,
              })
          },
          signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            toast.error(action.payload, {
                position: toast.POSITION.TOP_RIGHT,
              })
          },
    }
})


export const {signInStart, signInSuccess, signInError,updateUserFailure,
    updateUserSuccess,
    updateUserStart,
    deleteUserFailure,
    deleteUserSuccess,
    deleteUserStart,
    signOutUserFailure,
    signOutUserSuccess,
    signOutUserStart} = userSlice.actions;

export default userSlice.reducer;
