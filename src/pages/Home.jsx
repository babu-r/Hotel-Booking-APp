import React, { useState, useEffect } from "react";
import HotelCard from "../components/HotelCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import axios from "axios";
import { Typography } from "@mui/material";
import { useUserContext } from "../components/UserProvider";
const DATA_URL = "https://hotels-api-4ltr.onrender.com/api/hotels";

const Homepage = () => {
  const [hotelData, setHotelData] = useState([]);
  const [user] = useUserContext();

  useEffect(() => {
    axios
      .get(DATA_URL)
      .then((response) => {
        console.log(response.data);
        setHotelData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container maxWidth="lg" sx={{ mt: "15vh" }}>
      {user.userName && (
        <Typography variant="h6" sx={{ color: "hsl(11, 80%, 60%)", mb: "1vh" }}>
          Welcome {user.userName}
        </Typography>
      )}
      <Grid container spacing={2}>
        {hotelData.map((hotel) => {
          const { id } = hotel;
          return (
            <Grid item md={4} key={id}>
              <HotelCard {...hotel} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Homepage;