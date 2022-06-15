const MenuList = require("../Model/menuListModel").default;

exports.menuList = async (req, res) => {
  const data = await MenuList.create(req.body);
  res.status(200).send(data);
};

exports.ViewmenuList = async (req, res) => {
  const data = await MenuList.findOne();
  res.status(200).send(data.MenuList);
};
