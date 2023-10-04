const express = require('express');
const { getAllUserController, insertUserController } = require('../controllers/user.controller');

const router = express.Router();

/// we use the method defined in the controller to show it in the view
router.get("/getUsers", getAllUserController);
/// we export the router to call it in the main file

router.post("/insertUser", insertUserController);


module.exports = router;