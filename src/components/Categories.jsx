import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import data from "../apis/apis.json";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    
    setTimeout(() => {
      setCategory(data)
    } , 2000)
    // ! burada veriyi bir tık gecikmeli çagırıyoruz. Stateni içine datayı atıp mapliyoruz.
  }, []);

  
  return (
    <Container className="mt-5" >
      <div className="container-fluid" style={{backgroundColor : "#D9D9D9"}}>
        <div className="row">
         

          {category.length == 0 ? (
            <div className=" d-flex  justify-content-center align-items-center">
          
            <div className="spinner-border " role="status">
            <span className="p-4">Loading...</span>
          </div>
            </div>
          ) : 

          //* kategoride item yoksa loadding göster varsa maple,
            
        

            category.map((item, index) => {
              return (
             
                <div
                  className="col-md-3 mb-3 d-flex justify-content-center"
                  key={index}
                >
                  <div className="card text-opacity-75">
                    <img src={item.image} alt="" width="50px" />
                    <Typography variant="subtitle2" component="h6">
                      {item.title}
                    </Typography>
                  </div>
                </div>
              );
            } )

        
           }
            
        </div>
        
      </div>
    </Container>
  );
};

export default Categories;
