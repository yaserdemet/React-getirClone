import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import data from "../apis/apis.json";
import { Grid } from "@material-ui/core";

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
      <div className="container-fluid pt-3" style={{backgroundColor : "#D9D9D9"}}>
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
             
                <Grid
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={3}
                  className="  mb-3 d-flex justify-content-center"
                  key={index}
                >
                  <div className="card ">
                    <img src={item.image} alt="" width="50px" />
                    <Typography variant="subtitle2"  component="h6" sx={{marginTop : "1rem" , fontSize : "0.8rem"}}>
                      {item.title}
                    </Typography>
                  </div>
                </Grid>
              );
            } )

        
           }
            
        </div>
        
      </div>
    </Container>
  );
};

export default Categories;
