import React, { useState, useEffect } from "react";
// import { MenuList } from "../components/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
function Menu() {
  const [items, setItems] = useState([]);
  const itemView = async () => {
    const res = await fetch("/menuList/MenuListData", {
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
  console.log(items, "hfdshb");
  useEffect(() => {
    if (items.length === 0) {
      itemView();
    }
  }, []);

  return (
    <div className="menu">
      <h1 className="menuTitle">Best Sellers</h1>
      <div className="menuList">
        {items.map((props) => {
          return (
            <MenuItem
              image={props.image}
              name={props.name}
              price={props.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
