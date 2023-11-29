import React from 'react'
import useGoogleAuth from '../hooks/useGoogleAuth'

const LoginGoogle = () => {
    useGoogleAuth()
    return (
        <div className='flex justify-center items-center'>
            <div id="signInDiv" style={{width: '100%'}}></div>
        </div>
    )
}

export default LoginGoogle;
