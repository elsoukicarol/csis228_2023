const { loadUser, insertUser } = require("../services/user.service")

// this method will validate data d
const getAllUserController = async(request, response) => {
    try {
        const users = await loadUser();
        response.status(200).json({users});
    } catch (error) {
        response.status(500).json({message: "Internal Error"});
    }
};

const insertUserController = async(request, response) =>{

    // crearting the user object
    const userData = {
        name: request.body.name,
        lastName: request.body.lastName,
        dob: request.body.dob,
    }
    try {
        await insertUser(userData);
        response.status(200).json({userData});
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Internal Error"});
    }
}

/// export this functionality so we can use it in the route (for the view part)

module.exports = {
    getAllUserController,
    insertUserController,
};