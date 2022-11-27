import { useState } from "react";
import {useNavigate}  from "react-router-dom"
import { useAuth } from "../Hooks/Auth";
import RegisterUser from "./RegisterUser";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'


const Login = () => {
  // const [newUserClicked, setNewUserClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("")
  const auth = useAuth()

  const navigate = useNavigate()








  return (
    <div>

        <div>
          <h1>Login Here</h1>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="enter email here"
          ></input>
          <br></br>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="enter password here"
          ></input>
          <br></br>
          {/* <Button
            onClick={(e) => {
              // setNewUserClicked(true);
            }}
          >
            New Users
          </Button> */}
          <Button onClick={async()=>{
            const loginResult = await auth.login(email, password)
   
            if(loginResult.success === true){
              navigate('/')
   }
 
   if(loginResult.success === false){
       setLoginMessage(loginResult.message)
   }
          }}>Login</Button>
        </div>
          {loginMessage}

      {/* {newUserClicked && 
      <RegisterUser setNewUserClicked={setNewUserClicked} />} */}
    </div>
  );
};

export default Login;
