import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () =>
  // { start }
  {
    const [items, setItems] = useState([]);
    const itemView = async () => {
      const res = await fetch("/Data/banner", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data.start, "dfd");
      setItems(data.start);
    };

    useEffect(() => {
      if (items.length === 0) {
        itemView();
      }
    }, []);
    return (
      <Carousel fade>
        {/* // banner data */}
        {items.map((item) => (
          <Carousel.Item>
            <img className="d-block w-100" src={item} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

export default Slider;
