const jwt = require('jsonwebtoken');

function checkAuth(req,res,next){
    try{
            const token = req.headers.authhorization.split(" ")[1];
            const decodeToken = jwt.varify(token,process.env.JWT_KEY);
            req.userData = decodeToken;
            next();


    }catch(error){
            return res.status(401).json({
               'message' :"Invalid Token",
               error:error
            })
    }
}

module.exports ={
    checkAuth:checkAuth
}