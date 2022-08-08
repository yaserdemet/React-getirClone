import React from "react";
import blog from "../assets/blok.png";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { addBlog } from "../helpers/functions";
import { toastSuccessNotify } from "../helpers/ToastNotify";
import { useValueContext } from "../contexts/BlogContext";

const NewBlog = () => {
  const navigate = useNavigate()
  const {values , setValues} = useValueContext()

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name +  ":" +  e.target.value);

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // console.log(values.url)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);

    addBlog(values);
    setValues({
      text: "",
      url: "",
      title: "",
      id: new Date().getTime(),
    });
    toastSuccessNotify("Your blog has been added.")

    setTimeout(() => {
      navigate("/about")
    },4000)
    
  };

  return (
    <form onSubmit={handleSubmit} className="blog-container mt-3">
      <div>
        <img src={blog} alt="" />
      </div>
      <div>
        <h3> ──── New Blog ────</h3>
      </div>
      <div className="mb-3">
        <input
          value={values.title}
          type="text"
          name="title"
          className="form-control mb-3 "
          id="exampleFormControlInput1"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          value={values.url}
          type="text"
          name="url"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Image Url"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <textarea

          value={values.text}
          className="form-control"
          name="text"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write your blog here"
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <button
          onClick={() => console.log(values.id)}
          className="form-control btn btn-primary"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewBlog;
