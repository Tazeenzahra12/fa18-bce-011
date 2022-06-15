import React, { useState, useEffect } from "react";
import "../styles/StarProduct.css";

const StarProduct = ({ starProduct }) => {
  const [items, setItems] = useState([]);
  const itemView = async () => {
    const res = await fetch("/Data/startProduct", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    // console.log(res);
    const data = await res.json();
    console.log(data);
    setItems(data);
  };
  console.log(items, "hfdshb");
  useEffect(() => {
    if (items.length === 0) {
      itemView();
    }
  }, []);
  return (
    <div className="starProduct">
      {items.map((star) => (
        <div>
          {" "}
          <a href={star.url}>
            {" "}
            <img src={star.image} alt="1st Product" />
          </a>
        </div>
      ))}

      {/* <div>
        <a href={starProduct[1].url}>
          {" "}
          <img src={starProduct[1].image} alt="1st Product" />
        </a>
      </div>
      <div>
        <a href={starProduct[2].url}>
          {" "}
          <img src={starProduct[2].image} alt="1st Product" />
        </a>
      </div> */}
    </div>
  );
};

export default StarProduct;
