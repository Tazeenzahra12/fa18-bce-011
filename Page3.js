import React, { component } from 'react';
import Prenavbar from "../components/Prenavbar";
import Navbar from "../components/Navbar.js";
import data from "../data/data.json";
import Footer from "../components/Footer.js";
import "../App.css";
import Gallery from './Gallery';

function Page3() {
    return ( 
        <div>
       <Prenavbar />
      <Navbar />
      <Gallery/>
      
      <Footer footer={data.footer} />
     
        </div>
     );
}

export default Page3;