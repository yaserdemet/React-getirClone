import React from "react";
import { useParams , useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { TbUserCircle } from "react-icons/tb";
import { deleteBlog } from "../helpers/functions";
import "../App.css";
import { useConsumeContext } from "../contexts/AuthContext";
const Details = () => {

    const { currentUser, displayName} = useConsumeContext()

    const navigate = useNavigate()

  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const { state } = location;
  console.log(state.title);
  const { title, text, url } = state;



  return (
    <div className="outer-card-details">

<h2> ──── Details ────</h2>
        
            <div className="card ">
        <div className="img-card">
          <img src={url} className="card-img-top" alt={title} />
        </div>

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {text}
           
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <TbUserCircle /> {currentUser.email}
          </li>
          <li className="list-group-item">
            <span>
              {" "}
              <FiHeart id="3" />{" "}
            </span>
            <span>
              {" "}
              <GoComment />{" "}
            </span>
          </li>
        </ul>
      </div>
      <div>
      <button className="btn btn-dark" onClick={() => navigate(-1)}>BACK</button>
      <button className="btn btn-warning m-3" >UPDATE</button>
      <button className="btn btn-danger" onClick={() => deleteBlog(id, navigate)}>DELETE</button>
      </div>
     

    </div>
  );
};

export default Details;
