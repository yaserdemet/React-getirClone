import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {BsPlus} from 'react-icons/bs';
export default function ProductItem({ product }) {
  return (
<div className="x">
    <Card sx={{width : 200 , height : 250 , position : "relative"}} >
    <BsPlus className="icons"  size={20}  style={{position : "absolute" , top : "3" , right : "3"}}/>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        src={product.image}
      />
      <CardContent>
        <Typography gutterBottom sx={{textAlign :  "center"}} component="div">
          {/*  sx in içinde CamelCase olarak yaz  */}
          {
          <small>
            product.title
          </small>
          }{" "}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">{product.price}</Button>
       
      </CardActions>
    </Card>
    
    </div>
  );
}
