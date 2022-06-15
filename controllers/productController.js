const Product = require("../Model/productModel");

exports.AllData = async (req, res) => {
  const data = await Product.create(req.body);
  res.status(200).send(data);
};

exports.Logo = async (req, res) => {
  const data = await Product.find();
  res.status(200).send(data[0].logo);
};

exports.data = async (req, res) => {
  const record = await Product.find();
  res.status(200).send(record);
};

exports.startProduct = async (req, res) => {
  const record = await Product.find();
  // console.log(record[0].starProduct);
  res.status(200).send(record[0].starProduct);
};
exports.footer = async (req, res) => {
  const record = await Product.find();
  res.status(200).send(record[0].footer);
};

exports.offer = async (req, res) => {
  const record = await Product.find();
  res.status(200).send(record[0].offer);
};

exports.banner = async (req, res) => {
  const record = await Product.find();
  res.status(200).send(record[0].banner);
};
