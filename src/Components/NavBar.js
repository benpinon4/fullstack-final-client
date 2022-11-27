import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import { useAuth } from "../Hooks/Auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const NavBar = () => {
const auth = useAuth()
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
const navigate = useNavigate()
    const [loginStatusMessage, setLoginStatusMessage] = useState("Logged Out")
    const [userStatusMessage, setUserStatusMessage] = useState("")


    useEffect(()=>{
        const fetchMessage = async () => {
            const response = await fetch(`${urlEndpoint}/users/message`,{
                method: "GET",
                headers: {
                    "Content-Type" : "application/json",
                    [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
                }
            })
            const responseJSON = await response.json()

            setLoginStatusMessage(responseJSON.message)
            setUserStatusMessage(responseJSON.verified.userData.email)

        }

        if (auth.userToken !== null) {
            fetchMessage()
        }
        if (auth.userToken === null) {
            setLoginStatusMessage("Logged Out")
            setUserStatusMessage("")
        }
    }, [auth.userToken, loginStatusMessage, userStatusMessage])

    return (
        
        <div>
            <div>
               {loginStatusMessage} {userStatusMessage} 
            </div>
            <div>
                <Button onClick={()=>{
                    auth.logout()
                    navigate('/login')
                }}>Logout</Button>
            </div>
        <div>
        <Link to="/login">Login</Link>
        <Link to="/registration">New Users</Link>       
        </div>
        <Link to="/">Home Page</Link>    
        <Link to="/products">Products</Link>
        <Link to="/shopping-cart">Shopping Cart</Link>
        </div>
    )
}

export default NavBar