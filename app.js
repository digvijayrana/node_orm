const express = require('express')
// const { Model } = require('sequelize/types')
const app = express()
const cors = require('cors');




// require('./index');
// var userController = require('./controller/userController')


app.use(cors());
app.use(express({ limit: "100mb",parameterLimit:1000000,extended:true, }));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
// app.get('/add',userController.addUser)
const postRoute = require('./routes/post');
const userRoute= require('./routes/user');
const imageRoute = require('./routes/image');



app.use('/post',postRoute);
app.use('/user',userRoute);
app.use('/image',imageRoute)
app.use('/uploads',express.static('../public/uploads'))
app.use(express.json())

app.get('/user',(req,res)=>{
    res.send("hii")
})



module.exports = app;
