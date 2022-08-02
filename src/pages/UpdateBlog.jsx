import React from "react";
import blog from "../assets/blok.png";
import { useLocation } from "react-router-dom";
import { addBlog } from "../helpers/functions";

const UpdateBlog = () => {
  const location = useLocation();
  const { state } = location;
  const {title,text, url}  = state
  console.log(title, text );

  return (
    <div>
      <form className="blog-container mt-3" onSubmit={addBlog}>
        <div>
          <img src={url} alt=""  className="circle-photo"/>
        </div>
        <div>
          <h3>──── Update Blog ────</h3>
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            className="form-control mb-3 "
            id="exampleFormControlInput1"
            placeholder="Title"
            defaultValue={text}
          />
          <input
            type="text"
            name="url"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Image Url"
            defaultValue={url}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            name="text"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write your blog here"
            defaultValue={title}
          >
            
          </textarea>
        </div>
        <div>
          <button className="form-control btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
