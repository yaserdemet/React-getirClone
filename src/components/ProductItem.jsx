import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ProductItem({ product }) {
  return (
<div className="x">
    <Card sx={{width : 200 , height : 250}} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        src={product.image}
      />
      <CardContent>
        <Typography gutterBottom sx={{textAlign :  "center"}} component="div">
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
