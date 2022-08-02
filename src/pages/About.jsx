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
  const { isLoading, contactList } = useFetch();

  return (
    <div className="outer-card">
        <h3>──── DASHBOARD ────</h3>
      <div className="outer-card">
        {isLoading
          ? console.log("dawdaw")
          : contactList?.map((item, index) => {
              const { title, url, text, id } = item;
              return (
                <BlogForm
                  key={index}
                  item={item}
                  title={title}
                  url={url}
                  text={text}
                  id={id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default About;
