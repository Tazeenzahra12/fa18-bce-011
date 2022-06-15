import React, { component } from 'react';
import Prenavbar from "../components/Prenavbar";
import Navbar from "../components/Navbar.js";
import data from "../data/data.json";
import Footer from "../components/Footer.js";
import "../App.css";
import Productdetails from './Productdetails';



function Page5() {
    return ( 
        <div>
       <Prenavbar />
      <Navbar />
      <Productdetails/>
      
      <Footer footer={data.footer} />
     
        </div>
     );
}

export default Page5;