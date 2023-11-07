import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

//@desc auth user to get token
//@route POST/api/users/login
//@Access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn:'30d'
    });

    //Set JWT as HTTPOnly Cookie
    res.cookie('jwt', token, {
      htppOnly:true,
      secure: process.env.NODE_ENV !== 'development',
      samesite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000 //30 Days, (Days * hours * minutes * seconds * 1000(milliseconds))
    })
   
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials'); 
  }

});

//@desc Register User
//@route POST/api/users
//@Access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register User");
});

//@desc Log Out User / Clear cookie cache
//@route POST/api/users/logout
//@Access Private
const logOutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly:true,
    expires: new Date(0)
  });
  
  res.status(200).json({message: "Logged out succesfully"});

});

//@desc Get User Profile
//@route Get/api/users/profile
//@Access Private
const GetUserProfile = asyncHandler(async (req, res) => {
  res.send("Get User Profile");
});

//@desc Update User Profile
//@route PUT/api/users/profile
//@Access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update User Profile");
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
  GetUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
