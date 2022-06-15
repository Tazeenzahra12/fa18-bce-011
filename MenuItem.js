import React from "react";
function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      {/* <div style={{ backgroundImage: { image } }}> </div> */}

      <div>
        <img src={image} alt="" />{" "}
      </div>

      <h1> {name} </h1>
      <p> Rs{price} </p>
      <button id="11"> ADD TO CART </button>
    </div>
  );
}

export default MenuItem;
