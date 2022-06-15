import React, { useEffect, useState } from "react";
import "../styles/Tab.css";
// import Info from "./Info";

const Gallery = () => {
  // const [items, setItems] = useState(Info);
  const [items, setItems] = useState([]);
  const itemView = async () => {
    const res = await fetch("/info/ViewInfoData", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    setItems(data);
  };
  useEffect(() => {
    if (items.length === 0) {
      itemView();
    }
  }, []);

  //   const filterItem = (categItem) => {
  //     const updatedItems = Info.filter((curElem) => {
  //       return curElem.category === categItem;
  //     });
  const filterItem = (categItem) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Choose Your Favourite Style
      </h1>
      <hr />

      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Plaid")}
          >
            Plaid
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Handbag")}
          >
            Handbag
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("kids")}
          >
            Kids
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Summer Affair")}
          >
            Summer Affair
          </button>
          <button
            className="btn btn-warning"
            onClick={() => filterItem("Wallets")}
          >
            Wallets
          </button>
          {/* <button className="btn btn-warning" onClick={() => setItems(Info)}>
            All
          </button> */}
        </div>
      </div>

      {/*  items section  */}

      <div className="menu-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { name, image, description, price } = elem;

                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                    <div className="row Item-inside">
                      {/* for images */}
                      <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src={image} alt={name} className="img-fluid" />
                      </div>

                      {/*  items description */}
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="main-title pt-4 pb-3">
                          <h1>{name}</h1>
                          <p>{description}</p>
                        </div>
                        <div className="menu-price-book">
                          <div className="price-book-divide d-flex justify-content-between ">
                            <h2>Price : {price}</h2>
                            <a href="#">
                              <button className="btn btn-primary">
                                Add To Cart
                              </button>
                            </a>
                          </div>
                          <p>*Prices may vary on selected date.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
