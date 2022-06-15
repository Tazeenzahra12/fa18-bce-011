const mongoose = require("mongoose");
const product = mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  banner: {
    start: [
      {
        type: String,
        required: true,
      },
    ],
  },
  offer: [
    {
      url: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
  starProduct: [
    {
      url: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  ],
  footer: {
    support: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    shopAndLearn: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    retailStore: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    aboutUS: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    contactUs: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
  },
});
//create the collection in database
const Product = mongoose.model("Product", product);
module.exports = Product;
