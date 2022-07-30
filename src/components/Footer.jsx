import React from "react";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="d-flex justify-content-around text-light bg-dark fixed-bottom p-1">
      <div>All rights deserved {new Date().getFullYear()}.</div>

      <div>
        <a href="#">
       
          <FiTwitter className="text-light ms-4"  size={20}/>
        </a>
        <a href="https://github.com/yaserdemet">
          <AiOutlineGithub className="text-light ms-4"size={20} />
        </a>
        <a href="mailto:ddemety@gmail.com">
       
          <FiMail className="text-light ms-4" size={20}/>
        </a>

         <a href="https://www.linkedin.com/in/yaser-demet/">
       
          <AiFillLinkedin className="text-light mx-4" size={20}/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
