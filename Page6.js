import React, { component } from 'react';
import Prenavbar from "../components/Prenavbar";
import Navbar from "../components/Navbar.js";
import data from "../data/data.json";
import Footer from "../components/Footer.js";
import "../App.css";
import Login from './Login';




function Page6() {
    return ( 
        <div>
       <Prenavbar />
      <Navbar />
      <Login/>
      
      <Footer footer={data.footer} />
     
        </div>
     );
}

export default Page6;