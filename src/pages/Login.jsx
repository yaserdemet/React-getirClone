import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useRef } from "react";
import { useEffect,useState } from "react";
import { signIn } from "../helpers/firebase";
import {useNavigate} from "react-router-dom"
import { signUpProvider } from "../helpers/firebase";
import { useConsumeContext } from "../contexts/AuthContext";

const Login = () => {
  const { displayName, setDisplayName } = useConsumeContext();
  const {currentUser,setCurrentUser} = useConsumeContext()

  const navigate = useNavigate()
  const firstRef = useRef()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  

  useEffect(() => {
    firstRef.current.focus()
  },[])


  const handleSubmit = (e) => {

    e.preventDefault()
    signIn(email, password, navigate)
    console.log(currentUser.displayName);
    
   
    setDisplayName(true);
  }
  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

 
  return (
    <div className="d-flex justify-content-center main" >
      <div className="form-image d-none d-md-block ">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
           ref = {firstRef}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email adress.."
            onChange={(e) => setEmail(e.target.value)}
          />
        
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password.."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn form-control mb-3 btn-primary">
          Submit
        </button>
      
     
      </form>
    </div>
  );
};

export default Login;
