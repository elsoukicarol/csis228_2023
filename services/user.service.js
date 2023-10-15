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
        let sql = "INSERT INTO `users`(`user_first_name`, `user_last_name`, `user_dob`) VALUES (?, ?, ?)";
        
        const users = await query(sql, [name, lastName, dob || null]);
        return users;

    } catch (error) {
        throw new Error(error);
    }
};

const userUpdate = async(userData) => {

    let sql = "UPDATE `users` SET `user_first_name`=?, `user_last_name`=?, `user_dob`=? WHERE `userid` = ?";
    const users = await query(sql, [userData.name, userData.lastName, userData.dob, userData.id]);
    return users;
}

const deleteUser = async(id) => {

    let sql = "DELETE FROM `users` WHERE `userid` = ?";
    const users = await query(sql, [id]);
    return users;
}

// now export this service so we can use it in the controller
module.exports = {
    loadUser,
    insertUser,
    userUpdate,
    deleteUser,
};