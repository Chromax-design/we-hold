import { useEffect } from 'react'
import useAuth from '../store/AuthStore'
import jwt_decode from "jwt-decode"


const useGoogleAuth = () => {
    const { setUser } = useAuth(state => state)
    const client_id = "679182386524-2aed93unmmrrtr27hjd3nc49bq0b5mkb.apps.googleusercontent.com";

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