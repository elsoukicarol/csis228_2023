const {check, validationResult} = require("express-validator");

const insertValidUser = [
    check('name').notEmpty().withMessage("Username cannot be empty"),
    check('lastName').notEmpty().withMessage("Last Name cannot be empty"),
    check('dob').isDate(),
];

const updateValidUser = [
    check('id').notEmpty().withMessage("User id must not be empty"),
    check('name').notEmpty().withMessage("Username cannot be empty"),
    check('lastName').notEmpty().withMessage("Last Name cannot be empty"),
    check('dob').isDate(),
];

const deleteValidUser = [
    check('id').notEmpty().withMessage("User id must not be empty"),
];


module.exports = {
    insertValidUser,
    validationResult,
    updateValidUser,
    deleteValidUser
};