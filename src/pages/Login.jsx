import React from "react";
import { Container, Grid, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "@firebase/auth";
import { useNavigate } from "react-router";
import { useUserContext } from "../components/UserProvider";
const BTN_STYLE = {
   height: "40px",
   backgroundColor: "#1976d2",
   color: "#fff",
   border: "none",
   borderRadius: "5px",
   fontSize: "25px",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   padding: "1em",
};
const Login = () => {
   const navigate = useNavigate();

   const [, setUser] = useUserContext();

   const onLoginClick = () => {
      console.log("clicked");
      signInWithPopup(auth, provider)
         .then((result) => {
            console.log("result", result);
            const userName = result.user.displayName;
            const userImage = result.user.photoURL;
            console.log("username ", userName, " userImg ", userImage);
            setUser((object) => ({ userName, userImg: userImage }));
            navigate("/home");
         })
         .catch((error) => {
            console.log("error ", error);
         });
   };

   return (
      <Container sx={{ mt: "10vh" }}>
         <Grid
            justifyContent="center"
            alignItems="center"
            container
            sx={{ height: "100vh" }}
         >
            <Grid item>
               <Button
                  sx={BTN_STYLE}
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  onClick={onLoginClick}
               >
                  Signin with Google
               </Button>
            </Grid>
         </Grid>
      </Container>
   );
};

export default Login;