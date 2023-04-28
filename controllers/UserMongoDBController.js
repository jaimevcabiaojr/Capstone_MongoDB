const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    throw error;
  }
};

const getUser = async (req, res) => {
  let id = req.params.id;
  try {
    const user = await User.findById(id);

    if (user) {
      res.json(user);
    } else {
      res.status(400).json({ msg: `id ${id} does not exists` });
    }
  } catch (error) {
    throw error;
  }
};

const createUser = async (req, res) => {
  const { name, cellphone, email, brand , itemtype,issue, remarks ,status1} = req.body;

  try {
    
    const user = await User.create({
      name: name,
      cellphone: cellphone,
      email: email,
      brand: brand,
      itemtype: itemtype,
      issue: issue,
      remarks: remarks,
      status1: status1,
    });

    if (user) {
      res.status(201).json({ msg: `Data inserted with id ${user._id}` });
    } else {
      res.status(400).json({ msg: "Data not inserted" });
    }
  } catch (error) {
    throw error;
  }
};

const updateUser = async (req, res) => {
  const { id, name, cellphone, email, brand, itemtype ,remarks,status1, } = req.body;

   try {
    const user = await User.findById(id);
    user.name = name;
    user.cellphone = cellphone;
    user.email = email;
    user.brand = brand;
    user.itemtype = itemtype;
    user.remarks = remarks;
    user.status1 = status1;
    await user.save();

    res.status(200).json({ msg: "Data updated successfully" });
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data deleted successfully" });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
