import { Link, UNSAFE_DataRouterStateContext } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../Hooks/Auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "react-bootstrap/NavBar";
import { AiOutlineShoppingCart, AiTwotoneShopping } from "react-icons/ai";
import { RiAccountBoxFill } from "react-icons/ri";
import { BsCartFill } from "react-icons/bs";
import { RiLogoutBoxRFill, RiSearchLine } from "react-icons/ri";

const NavigationBar = (props) => {
  const auth = useAuth();
  const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
  const navigate = useNavigate();
  const [loginStatusMessage, setLoginStatusMessage] = useState("Logged Out");
  const [userStatusMessage, setUserStatusMessage] = useState("");
  const { setUserData } = props;

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch(`${urlEndpoint}/users/message`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken,
        },
      });
      const responseJSON = await response.json();

      setLoginStatusMessage("Logged in as");
      setUserStatusMessage(responseJSON.verified.userData.email);
      console.log(userStatusMessage);
      console.log(loginStatusMessage);
      setUserData(responseJSON.verified.userData);
    };

    if (auth.userToken !== null) {
      fetchMessage();
    }
    if (auth.userToken === null) {
      setLoginStatusMessage();
      setUserStatusMessage("");
    }
  }, [auth.userToken, loginStatusMessage, userStatusMessage]);

  return (
    // Main container for all of navbar and black header
    <div className="w-full h-40">
      <div className="vw-100 flex justify-end column h-1/8 bg-black text-white">
      <p className="mx-auto">Free Shipping On Orders Over $50</p> 
      <div className="flex column text-xs ">
            <p>{loginStatusMessage}</p>
            <p>{userStatusMessage}</p>

            {loginStatusMessage === undefined ||
            userStatusMessage === undefined && (<p>Logged Out</p>)}
          </div>
      </div>


      <NavBar className="flex justify-content-center space-x-20 h-3/4 bg-zinc-500">
        <div className="hidden md:block text-center text-white w-1/6">Company Logo</div>

        {/* Links and Search Bar Container */}
        <div className="flex row mx-auto w-3/6">
          <div className="flex column bg-white border border-black"> 
          
            <input 
              className="text-center w-full"
              type="text"
              placeholder="Search For Products"
            ></input>
            <button ><RiSearchLine></RiSearchLine></button>
          </div>
        

          <br></br>

          {/* Nav Links */}
          <div className="flex justify-between md:flex justify-between">
            <Link className="no-underline text-white" to="/">
              Home
            </Link>
            <Link className="no-underline text-white" to="/products">
              Products
            </Link>
            <Link className="no-underline text-white" to="/shopping-cart">
              About Us
            </Link>
          </div>
          </div>

        <div className="hidden md:flex w-1/6">
          <div className="flex column">
            <Link
              className="no-underline text-white"
              to="/login"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Login"
            >
              <RiAccountBoxFill className="text-white text-4xl"></RiAccountBoxFill>
            </Link>

            <Link className="no-underline text-white" to="/shopping-cart" data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Shopping Cart">
              <BsCartFill className="text-white text-4xl"></BsCartFill>
            </Link>

          </div>



         
          <div>
            <button
              onClick={() => {
                auth.logout();
                navigate("/login");
              }}
            >
              <RiLogoutBoxRFill className="text-white text-4xl" data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Logout" ></RiLogoutBoxRFill>
            </button>
          </div>

     
        </div>
      </NavBar>
    </div>
  );
};

export default NavigationBar;

// vw-100 h-[80px] bg-black z-10 fixed drop-shadow-lg

