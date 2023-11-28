import { useEffect } from 'react'
import useAuth from '../store/AuthStore'
import jwt_decode from "jwt-decode"


const useGoogleAuth = () => {
    const { setUser } = useAuth(state => state)
    const client_id = "180560069205-9m3kfjtjmdsjskqc9rbcj3uh1mm9b7f4.apps.googleusercontent.com";

    const handleGoogleLogin = (response) => {
        const user = jwt_decode(response.credential)
        console.log(user)
        // localStorage.setItem("user", JSON.stringify(user.email))
        // setUser(user.email);
    }

    useEffect(() => {
        /* global google */
        window.google.accounts.id.initialize({
            client_id,
            callback: handleGoogleLogin
        })

        window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        )
    }, [])
}

export default useGoogleAuth