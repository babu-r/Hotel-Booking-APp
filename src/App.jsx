import "./App.css";
import Homepage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelDetails from "./pages/HotelDetails";
import Login from "./pages/Login";
import Userprovider from "./components/UserProvider";
import Layout from "./pages/Layout";

function App() {
   return (
     <div>
       <Userprovider>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Login />} />
             <Route
               path="/home"
               element={
                 <Layout>
                   <Homepage />
                 </Layout>
               }
             />
             <Route
               path="/hotel-details/:slug"
               element={
                 <Layout>
                   <HotelDetails />
                 </Layout>
               }
             />
           </Routes>
         </BrowserRouter>
       </Userprovider>
     </div>
   );
 }
 
 export default App;