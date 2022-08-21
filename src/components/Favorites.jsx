import React from 'react'
import product from "../apis/favorite.json";
import {useState , useEffect} from "react";
import ProductItem from './ProductItem';
import { Container, Typography } from '@mui/material';



const Favorites = () => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  setProducts(product);

} , [])
  return (
    <Container>
      
          <Typography>
            Favoriler
          </Typography>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3rem",
            justifyContent: "center",
            marginTop: "20px",
            alignItems: "center"
          }}
          className = "container"
          >
            {products?.length && products?.map((product , index) => {
              const {title , image , price , id} = product;

              return (
                <ProductItem key={index} product={product} />
                //* destructure edip tek tekte gönderebilirdik.
              )
            })}
          </div>


    </Container>
  )
}

export default Favorites