import React from "react";
import js from "../assets/js.jpg";
import py from "../assets/py.jpg";
import c2 from "../assets/c2.jpg";
import { useState } from "react";
import "../App.css";
import { FiHeart } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { TbUserCircle } from "react-icons/tb";
import BlogForm from "../components/BlogForm";
import { useFetch } from "../helpers/functions";

const About = () => {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = (e) => {
    console.log(e.target.id);
    setClicked(!clicked);
    if (e.target.id == "3") {
      e.target.classList.add("togg");
    } else {
      e.target.classList.remove("togg");
    }
  };

   const {isLoading, contactList} = useFetch()




  return (
    <div className="outer-card">


      {/* <div className="card ">
        <div className="img-card">
          <img src={js} className="card-img-top" alt="js" />
        </div>

        <div className="card-body">
          <h5 className="card-title">javaScript</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <TbUserCircle /> ddemety@gmail.com
          </li>
          <li className="list-group-item">
            <span>
              {" "}
              <FiHeart
                onClick={() => setClicked(!clicked)}
                className={clicked ? "togg" : ""}
              />{" "}
            </span>
            <span>
              {" "}
              <GoComment />{" "}
            </span>
          </li>
        </ul>
      </div>

      <div className="card ">
        <div className="img-card">
          <img src={py} className="card-img-top" alt="js" />
        </div>

        <div className="card-body">
          <h5 className="card-title">Python</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <TbUserCircle /> mozz@gmail.com
          </li>
          <li className="list-group-item">
            <span>
              {" "}
              <FiHeart id="3" onClick={handleClick} />{" "}
            </span>
            <span>
              {" "}
              <GoComment />{" "}
            </span>
          </li>
        </ul>
      </div>

      <div className="card ">
        <div className="img-card">
          <img src={c2} className="card-img-top" alt="js" />
        </div>

        <div className="card-body">
          <h5 className="card-title">C ##</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <TbUserCircle /> heil-isildur@hotmail.com
          </li>
          <li className="list-group-item">
            <span>
              {" "}
              <FiHeart onClick={handleClick} />{" "}
            </span>
            <span>
              {" "}
              <GoComment />{" "}
            </span>
          </li>
        </ul> */}
      {/* </div> */}

<div className="outer-card">
  {
   isLoading ? console.log("dawdaw"): (
    contactList?.map((item, index) => {
      const {title,url, text, id} = item
      return(
        <BlogForm key={index} item={item}  title={title} url={url} text={text} id={id}/>
      )
      })
   )
  }
</div>

   
    </div>
  );
};

export default About;
