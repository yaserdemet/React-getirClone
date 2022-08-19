import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import data from "../apis/apis.json";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(data);
    console.log(category);
  }, []);
  return (
    <Container className="mt-5">
      <Typography variant="subtitle2" component="h1">
        Categories
      </Typography>

      <div className="container">
        <div className="row">
          {category &&
            category.map((item, index) => {
              return (
                <div className="col-md-4 mb-3" key={index}>
                  <div className="card">
                    <img src={item.image} alt="" width="50px" />
                  <Typography variant="subtitle2" component="h6">
                    {item.title}
                  </Typography>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Container>
  );
};

export default Categories;
