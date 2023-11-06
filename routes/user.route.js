const express = require('express');
const { getAllUserController, insertUserController, updateUserController, deleteUserController } = require('../controllers/user.controller');
const { insertValidUser, updateValidUser, deleteValidUser } = require('../validators/user-validator');

const router = express.Router();

/// we use the method defined in the controller to show it in the view
router.get("/getUsers" , getAllUserController);
/// we export the router to call it in the main file

router.post("/insertUser", insertValidUser, insertUserController);

router.post("/updateUser", updateValidUser ,updateUserController);

router.delete("/deleteUser", deleteValidUser, deleteUserController);

module.exports = router;