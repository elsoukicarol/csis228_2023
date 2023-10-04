const { query } = require("../database/db");

const loadUser = async() =>{
    try {
        var sql = "SELECT * FROM USERS";
        const users = await query(sql);
        return users;
    } catch (error) {
        throw new Error(error);
    }
};

const insertUser = async(userData)=> {

    var name = userData.name;
    var lastName = userData.lastName;
    var dob = userData.dob;

    try {
        var sql = "INSERT INTO `users`(`user_first_name`, `user_last_name`, `user_dob`) VALUES (?, ?, ?)";
        
        const users = await query(sql, [name, lastName, dob || null]);
        return users;

    } catch (error) {
        throw new Error(error);
    }
};
// now export this service so we can use it in the controller
module.exports = {
    loadUser,
    insertUser,
};