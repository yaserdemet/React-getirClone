import React from "react";
import {useNavigate} from "react-router-dom"
import { FiHeart } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { TbUserCircle } from "react-icons/tb";
import { Navigate } from "react-router-dom";
import { useConsumeContext } from "../contexts/AuthContext";
import Counter from "./Counter";


const BlogForm = ({ title, text, url , index , id, item}) => {

  const {currentUser, displayName} = useConsumeContext()

  console.log(title, text, url,id);
  const navigate = useNavigate()
 

  return (
    <div className="card " >
      <div className="img-card">
        <img src={url} className="card-img-top" alt="js" onClick={() => navigate(`/details/${id}`, {state : item})} />
      </div>

      <div className="card-body" >
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {currentUser.email}
          <TbUserCircle />
        </li>
        <li className="list-group-item">
       
    
          <span>
          
          <Counter />
            <GoComment />{" "}
            COMMENT
          </span>
        </li>
      </ul>
   
    </div>
  );
};

export default BlogForm;
