import React, { component } from 'react';
import Prenavbar from "../components/Prenavbar";
import Navbar from "../components/Navbar.js";
import data from "../data/data.json";
import Footer from "../components/Footer.js";
import Slider from "../components/Slider.js";
import Offers from "../components/Offers.js";
import Heading from "../components/Heading.js";
import StarProduct from "../components/StarProduct.js";
import "../App.css";

function Page1() {
    return ( 
        <div>
       <Prenavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="NEW ARRIVALS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="CONNECT WITH US" />
      <Footer footer={data.footer} />
     
        </div>
     );
}

export default Page1;