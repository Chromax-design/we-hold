import React, { useEffect, useState } from 'react'
import useAuth from '../store/AuthStore'
import { useNavigate } from 'react-router-dom'
import useGoogleAuth from '../hooks/useGoogleAuth'

const LoginGoogle = () => {
    useGoogleAuth()
    // const { user, login } = useAuth(state => state)

    return (
        <div className='flex justify-center items-center'>
            <div id="signInDiv" className=''></div>
        </div>
    )
}

export default LoginGoogle;
