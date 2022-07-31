import React from "react";
import blog from "../assets/blok.png";

const NewBlog = () => {
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
          type="email"
          className="form-control mb-3 "
          id="exampleFormControlInput1"
          placeholder="Title"
          
        />
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Image Url"
        />
      </div>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write your blog here"
        ></textarea>
      </div>
      <div >
        <button   className="form-control btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default NewBlog;
