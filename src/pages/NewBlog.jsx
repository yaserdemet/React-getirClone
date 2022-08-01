import React from "react";
import blog from "../assets/blok.png";
import { useState } from "react";

const NewBlog = () => {
  const [values, setValues] = useState({
    title: "",
    url: "",
    text: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name +  ":" +  e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values.url)
  };

  return (
    <div className="blog-container mt-3">
      <div>
        <img src={blog} alt="" />
      </div>
      <div>
        <h3> New Blog</h3>
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
        <button className="form-control btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default NewBlog;
