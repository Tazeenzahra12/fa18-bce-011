const mongoose = require("mongoose");
const menuList = mongoose.Schema({
  MenuList: [
    {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
    },
  ],
});
//create the collection in database
const MenuList = mongoose.model("MenuList", menuList);
module.exports = MenuList;
