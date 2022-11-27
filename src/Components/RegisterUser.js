import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/Auth"
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'

const RegisterUser = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const auth = useAuth()

  const { setNewUserClicked } = props;

   


  return (
    <div>
      <h1>Create Your Account</h1>
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

      <Button
        onClick={async()=>{
            
            
          const registerResult = await auth.register(email, password)

          setNewUserClicked(false);

           
        }}
      >
        Create User
      </Button>
    </div>
  );
};

export default RegisterUser;
