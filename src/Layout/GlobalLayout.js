import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"


const GlobalLayout = (props) => {

   const {setUserData} = props

   
   return (
    <div>
    <NavBar setUserData={setUserData} />
    <Outlet />
    </div>
   )
}

export default GlobalLayout