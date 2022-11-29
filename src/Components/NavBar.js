import {Link} from "react-router-dom"
import {Button} from "react-bootstrap"
import { useAuth } from "../Hooks/Auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const NavBar = (props) => {
const auth = useAuth()
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
const navigate = useNavigate()
    const [loginStatusMessage, setLoginStatusMessage] = useState("Logged Out")
    const [userStatusMessage, setUserStatusMessage] = useState("")
    const {setUserData} = props

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
            console.log(responseJSON)
            setLoginStatusMessage(responseJSON.message)
            setUserStatusMessage(responseJSON.verified.userData.email)
            setUserData(responseJSON.verified.userData)

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
                {/* {loginStatusMessage && userStatusMessage && <h4>{loginStatusMessage}: {userStatusMessage}</h4> }
                {loginStatusMessage || userStatusMessage === undefined && <h4>Logged Out</h4> }
             */}
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