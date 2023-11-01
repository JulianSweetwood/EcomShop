import express from "express";
const router = express.Router();
import {         authUser,
    registerUser,
    logOutUser,
    GetUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,} from "../controllers/userController.js";

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logOutUser);
router.post('/login', authUser);
router.route('/profile').get(GetUserProfile).put(updateUserProfile);
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser)

export default router