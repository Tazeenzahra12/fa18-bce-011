const mongoose = require("mongoose");
const info = mongoose.Schema({
  Info: [
    {
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
});
//create the collection in database
const Info = mongoose.model("Info", info);
module.exports = Info;
