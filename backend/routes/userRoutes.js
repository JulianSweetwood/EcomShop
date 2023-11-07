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
import {protect, admin} from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logOutUser);
router.post('/login', authUser);
router.route('/profile').get(protect, GetUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin,deleteUser).get(protect, admin,getUserById).put(protect, admin,updateUser)

export default router