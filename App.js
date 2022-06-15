import "./App.css";
import {Route, Routes } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";

function App() {
  return (
  <Routes>
   
  <Route path="/Home" exact element={<Page1 />} />
  <Route path="/rateus" element={<Page2 />} />
  <Route path="/BuyNow" element={<Page3 />} />
  <Route path="/BestSellers" exact element={<Page4 />} />
  <Route path="/reviews" element={<Page5 />} />
  <Route path="/login" element={<Page6 />} />
       
       
        
        
  </Routes>
   
  );
}

export default App;
