const Info = require("../Model/infoModel").default;

exports.infoData = async (req, res) => {
  const data = await Info.create(req.body);
  res.status(200).send(data);
};

exports.ViewinfoData = async (req, res) => {
  const data = await Info.findOne();
  res.status(200).send(data.Info);
};
