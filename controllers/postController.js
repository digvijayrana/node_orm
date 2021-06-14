const models = require('../models');
const Validater = require('fastest-validator');

function save(req,res){
    const post = {
        title:req.body.title,
        content:req.body.content,
        imageUrl:req.body.imageUrl,
        categoryId:req.body.categoryId,
        userId:1
    }

    const schema = {
      
            title:{type:"string",optional:false,max:"100"},
            content:{type:"string",optional:false,max:"500"},
            categoryId:{type:"number",optional:false},
        
    }
    const v = new Validater();
    const validationResponse = v.validate(post,schema);
    if(validationResponse!==true){
        return res.status(400).json({
            message:"validation failed",
            errors:validationResponse
        })
    }

    models.Post.create(post).then(result =>{
        res.status(201).json({
            message:"Post created successfully",
            post:result
        })

    }).catch(err=>{
        res.status(500).json({
            message:"something wrong",
            error:err
        })
    })
}
function show(req,res){
    const id = req.body.id;
    models.Post.findByPk(id).then(result =>{
        if(result){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                message:" Id not found"
            })
        }
           
    }).catch(error =>{
                    res.status(500).json({
                        message:error
                    })
    })
}

function index(req,res){

    models.Post.findAll().then(result =>{
            res.status(200).json(result)
    }).catch(error =>{
                    res.status(500).json({
                        message:error
                    })
    })
}

function update(req,res){
    const {id }= req.body

    const updatedPost={
        title:req.body.title,
        content:req.body.content,
        imageUrl:req.body.imageUrl,
        categoryId:req.body.categoryId,
        userId:1
    }
    const userId = 1;
    models.Post.update(updatedPost,{where:{id:id,userId:userId} })
    .then(result =>{
        res.status(200).json({
        message:"Update Successfully",
        post: result
        })
    })
    .catch(error =>{
        res.status(500).json({
            message:error
        })
    })

}

function destroy(req,res){
    const id = req.body.id;
    const userId = 1;
    models.Post.destroy({where:{id:id,userId:userId}})
    .then(
        result =>{
            res.status(200).json({
            message:"Delete Successfully",
            post: result
            })
        }
    )
    .catch(error =>{
        res.status(500).json({
            message:error
        })
    })
}

module.exports ={
   save:save,
   show:show,
   index:index,
   update:update,
   destroy:destroy
}