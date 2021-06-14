var db = require('../index')

var addUser = (req,res)=>{
    let response = {
        data:"Ok"
    }
    res.status(200).json(response);
}

module.exports ={
    addUser
}