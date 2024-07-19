const userModel = require("../Models/user");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { name, email } = req.body;

  try {
    let userExist = await userModel.findOne({ email: email });

    if (!userExist) {
      let user = await userModel.create({
        name: name,
        email: email,
      });

      res.status(200).json({ message: "Account Created", userId: user._id });
    } else {
      res.status(200).json({ message: "Account Login Successful", userId: userExist._id });
    }
  } catch (err) {
    res.status(200).json({ error: err.message });
  }
};

module.exports = login;
