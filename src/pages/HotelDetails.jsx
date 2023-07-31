import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
const HotelDetails = () => {
  const params = useParams();
  const [hotelInfo, setHotelInfo] = useState({});
  useEffect(() => {
    axios
      .get(`https://hotels-api-4ltr.onrender.com/api/hotels/${params.slug}`)
      .then((response) => {
        console.log(response.data);
        setHotelInfo(response.data);
      })
      .catch((error) => console.log(error));
  }, [params.slug]);
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "10vh" }}>
        {hotelInfo.name && (
          <Typography variant="h6" sx={{ ml: 2, color: "hsl(11, 80%, 60%)" }}>
            Welcome to {hotelInfo.name}
          </Typography>
        )}
        <Grid container spacing={2}>
          {hotelInfo.images?.map((item) => {
            const { id, img } = item;
            return (
              <Grid item lg={4} key={id}>
                <img
                  src={img}
                  alt="hotel"
                  style={{
                    width: "95%",
                    borderRadius: "5px",
                    boxShadow: "5px 5px 5px grey",
                    margin: "10px",
                    height: "200px",
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
        <Typography variant="body2" sx={{ ml: 2 }}>
          {hotelInfo.rooms?.map((room) => (
            <span key={room.content} style={{ color: "grey" }}>
              {room.content}{" "}
            </span>
          ))}
        </Typography>
        <Typography variant="h6" sx={{ ml: 2, mt: 5 }}>
          What this place offers!!
        </Typography>
        <Box
          sx={{
            width: "90%",
            maxWidth: "100%",
            bgcolor: "background.paper",
            ml: 2,
            mt: 3,
          }}
        >
          <List>
            {hotelInfo.features?.map((feature) => {
              return (
                <>
                  <ListItem disablePadding key={feature.text}>
                    <ListItemText primary={feature.text} />
                  </ListItem>
                  <Divider />
                </>
              );
            })}
          </List>
        </Box>
      </Container>
    </>
  );
};

export default HotelDetails;