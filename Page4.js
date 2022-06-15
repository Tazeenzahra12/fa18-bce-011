import React, { component } from 'react';
import Prenavbar from "../components/Prenavbar";
import Navbar from "../components/Navbar.js";
import data from "../data/data.json";
import Footer from "../components/Footer.js";
import "../App.css";
import Menu from './Menu';


function Page4() {
    return ( 
        <div>
       <Prenavbar />
      <Navbar />
<Menu/>
      
      <Footer footer={data.footer} />
     
        </div>
     );
}

export default Page4;