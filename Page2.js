import React, { component } from 'react';
import Prenavbar from "../components/Prenavbar";
import Navbar from "../components/Navbar.js";
import data from "../data/data.json";
import Footer from "../components/Footer.js";
import Ratings from "../components/Ratings.js";
import "../App.css";

function Page2() {
    return ( 
        <div>
       <Prenavbar />
      <Navbar />
      <Ratings/>
      
      <Footer footer={data.footer} />
     
        </div>
     );
}

export default Page2;