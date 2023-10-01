import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInError, signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name:result.user.displayName,email:result.user.email, photoUrl: result.user.photoURL})
            })

            const data = await res.json();
            if(data.success === false){
                dispatch(signInError(data.message))
                return;
              }

            dispatch(signInSuccess(data))
            navigate('/')
           
        } catch (e) {
            console.log("could not sign in with google", e)
            dispatch(signInError(e.message))
        }

    }
    return (
        <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>continue with google</button>
    )
}
