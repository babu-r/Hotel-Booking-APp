import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router";
const Hotelcard = ({ address, pricePerNight, thumbnail, rating, slug }) => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate(`/hotel-details/${slug}`);
   };
   return (
      <Card sx={{ maxWidth: 345, mb: 5 }} onClick={handleClick}>
         <CardActionArea>
            <CardMedia
               component="img"
               height="220"
               image={thumbnail}
               alt="Hotel room"
            />
            <CardContent>
               <Typography gutterBottom variant="h6" component="div">
                  {address}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  ${pricePerNight} night
               </Typography>
               <Rating name="read-only" value={parseInt(rating)} readOnly />
            </CardContent>
         </CardActionArea>
      </Card>
   );
};

export default Hotelcard;