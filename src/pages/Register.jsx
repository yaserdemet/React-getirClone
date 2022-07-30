import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../helpers/firebase";
import { useConsumeContext } from "../contexts/AuthContext";
import { signUpProvider } from "../helpers/firebase";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
  const { displayName, setDisplayName } = useConsumeContext();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    setDisplayName(displayName);
    console.log(firstName, lastName);
    createUser(email, password, navigate, displayName);

    //! burada navigate ile home gönderebilirdik. Fakat hatalı bir işlemde yine gönderecek. Bunun için firebase deki functionun try kısmında kullandık. Buradanda parametre ile gönderdik. Hookları componentlerin  içinde kullanabiliriz. Burası bir fonksiyon. Bu sebeple functiona parametre olarak gönderdik.
  };
  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image d-none d-md-block col-7 ms-0">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className="register-form col-5 ms-5 ">
        <h1 className="form-title display-3 ">Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name.."
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name.."
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Register"
          />
          <button
            className="btn btn-primary form-control mt-3"
            onClick={handleProviderLogin}
          >
            Continue with Google <FcGoogle size={30} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
