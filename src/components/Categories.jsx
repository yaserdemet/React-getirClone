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
      

      <div className="container-fluid">
        <div className="row">
        <Typography variant="subtitle2" component="h1" style={{marginLeft  : "8rem"}}>
        Categories
      </Typography>
          {category &&
            category.map((item, index) => {
              return (
                <div className="col-md-4 mb-3 d-flex justify-content-center" key={index}>
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
