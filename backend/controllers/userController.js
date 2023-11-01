import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc auth user to get token
//@route POST/api/users/login
//@Access Public 
const authUser = asyncHandler(async (req, res) => {
res.send('auth User');
});

//@desc Register User
//@route POST/api/users
//@Access Public 
const registerUser = asyncHandler(async (req, res) => {
res.send('register User');
});

//@desc Log Out User / Clear cookie cache
//@route POST/api/users/logout
//@Access Private
const logOutUser = asyncHandler(async (req, res) => {
    res.send('log out User');
    });

    //@desc Get User Profile
//@route Get/api/users/profile
//@Access Private
const GetUserProfile = asyncHandler(async (req, res) => {
    res.send('Get User Profile');
    });

    //@desc Update User Profile
//@route PUT/api/users/profile
//@Access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('Update User Profile');
    });

    //@desc Get All Users
//@route GET/api/users
//@Access Private / Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get Users');
    });

    //@desc Get user by ID
//@route GET/api/users/:id
//@Access Private / Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('Get User by ID');
    });

    //@desc Delete User
//@route DELETE/api/users/:id
//@Access Private / Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('Delete User');
    });

    //@desc Update User
//@route PUT/api/users/:id
//@Access Private / Admin 
const updateUser = asyncHandler(async (req, res) => {
    res.send('Update User');
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
    }