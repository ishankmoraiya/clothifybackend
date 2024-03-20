const User = require("../model/User");

exports.createUser = async (req, res) => {
  const { email, mobile, password } = req.body;
  console.log(email, mobile, password);

  try {
    const user = await User.create({
      email: email,
      mobile: mobile,
      password: password,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error creating user",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error fetching users",
    });
  }
};
