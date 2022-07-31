import React from "react";
import {useNavigate} from "react-router-dom"
import { useConsumeContext } from "../contexts/AuthContext";

const Profile = () => {
  const navigate = useNavigate()
  const { displayName, setDisplayName } = useConsumeContext();
  const {currentUser,setCurrentUser} = useConsumeContext()
  return (
    <div>
      <div className="card1 mt-5 bg-warning p-3 container-fluid" >
        <div className="card-body ">
          <div>
            <img src={"https://picsum.photos/150/150"} alt="" style={{borderRadius : "50%"}}/>
          </div>
          <h5 className="card-title">Welcome to Your Page</h5>
          <p className="card-text">
          { currentUser && "Username : " + currentUser.displayName}
          </p>
          <p className="card-text">
       Your Email Adress:   {currentUser &&  currentUser.email}
          </p>
          <button onClick={() => navigate(-1)}  className="btn btn-outline-dark">
            Go Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
