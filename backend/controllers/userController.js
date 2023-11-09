import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc auth user to get token
//@route POST/api/users/login
//@Access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc Register User
//@route POST/api/users
//@Access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc Log Out User / Clear cookie cache
//@route POST/api/users/logout
//@Access Private
const logOutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out succesfully" });
});

//@desc Get User Profile
//@route Get/api/users/profile
//@Access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if  (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else { 
    res.status(404);
    throw new Error("User not found")
  }
});

//@desc Update User Profile
//@route PUT/api/users/profile
//@Access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password){
      user.password = req.body.password
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });

  } else {
    res.status(404);
    throw new Error ('User not found')
  }
});

//@desc Get All Users
//@route GET/api/users
//@Access Private / Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get Users");
});

//@desc Get user by ID
//@route GET/api/users/:id
//@Access Private / Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("Get User by ID");
});

//@desc Delete User
//@route DELETE/api/users/:id
//@Access Private / Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete User");
});

//@desc Update User
//@route PUT/api/users/:id
//@Access Private / Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update User");
});

export {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
