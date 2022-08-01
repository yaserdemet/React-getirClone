import React from "react";

import { FiHeart } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { TbUserCircle } from "react-icons/tb";

const BlogForm = ({ title, text, url }) => {
  console.log(title, text, url);

const handleClick = () => {
    
}

  return (
    <div className="card " onClick={handleClick}>
      <div className="img-card">
        <img src={url} className="card-img-top" alt="js" />
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {" "}
          <TbUserCircle />
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
  );
};

export default BlogForm;
