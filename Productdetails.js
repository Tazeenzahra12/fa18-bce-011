import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Productdetails extends Component {

    state = { 

        img : require("./images/rrr1.jpg"),
        img1 : require("./images/rrrr1.jpg"),
        img2 : require("./images/rr3.jpg"),
        img3 : require("./images/rr4.jpg")
     }
    render() { 
        return ( 
            <div>
            <div className='row'>
                <div className='col-md-12' style={{height:"100px", backgroundColor:"white"}}>
                    <h3 style={{marginLeft:"800px", marginTop:"30px"}}> Bag Review</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"white"}}>
                    <img src={this.state.img} style={{width:"80%", height:"80%", marginTop:"40px", marginLeft:"70px"}}/>
                </div>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"white"}}>
                    <p style={{marginTop:"150px"}}>Spoiler alert: it’s one of my favorite bags</p>

                 <button style={{ backgroundColor : "white" }} > Read More   <a href='http://www.google.com/'> </a></button> 
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12' style={{height:"100px", backgroundColor:"white"}}>
                    <h3 style={{marginLeft:"800px", marginTop:"30px"}}> Bag Review</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"white"}}>
                    <img src={this.state.img1} style={{width:"80%", height:"80%", marginTop:"40px", marginLeft:"50px"}}/>
                </div>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"white"}}>
                    <p style={{marginTop:"150px"}}>I got nothing but love for this little lady!.</p>

                 <button style={{ backgroundColor : "white" }} > Read More   <a href='http://www.google.com/'> </a></button> 
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12' style={{height:"100px", backgroundColor:"white"}}>
                    <h3 style={{marginLeft:"800px", marginTop:"30px"}}> Bag Review</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"white"}}>
                    <img src={this.state.img2} style={{width:"80%", height:"80%", marginTop:"40px", marginLeft:"50px"}}/>
                </div>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"white"}}>
                    <p style={{marginTop:"150px"}}>ndie & emerging brands at every price point….</p>

                 <button style={{ backgroundColor : "white" }} > Read More   <a href='/http://www.google.com/'> </a></button> 
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12' style={{height:"100px", backgroundColor:"white"}}>
                    <h3 style={{marginLeft:"800px", marginTop:"30px"}}> Bag Review</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"white"}}>
                    <img src={this.state.img3} style={{width:"80%", height:"80%", marginTop:"40px", marginLeft:"50px"}}/>
                </div>
                <div className='col-md-6' style={{height:"500px", backgroundColor:"white"}}>
                    <p style={{marginTop:"150px"}}>Here’s why I would buy these bags again and again</p>

                 <button style={{ backgroundColor : "white" }} > Read More   <a href='google.com/'> </a></button> 
                </div>
            </div>
            <div>

            
            </div>
  
            </div>        
            

         );
    }
}
 
export default Productdetails ;