const express = require('express');
const { getAllUserController, insertUserController, updateUserController, deleteUserController } = require('../controllers/user.controller');

const router = express.Router();

/// we use the method defined in the controller to show it in the view
router.get("/getUsers", getAllUserController);
/// we export the router to call it in the main file

router.post("/insertUser", insertUserController);

router.post("/updateUser", updateUserController);

router.delete("/deleteUser", deleteUserController);

module.exports = router;