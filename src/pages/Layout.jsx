import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { auth } from "../firebase";
import { useNavigate } from "react-router";


const Layout = ({ children }) => {
   const navigate = useNavigate();

   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         if (!user) navigate("/");
         console.log(user);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <Navbar />
         {children};
      </>
   );
};

export default Layout;