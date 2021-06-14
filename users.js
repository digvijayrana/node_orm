module.exports = (sequelize,DataTypes)=>{
    const Users = sequelize.define('users',{
        name:DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            defaultValue:'Test@gmail.com'
        },
        gender:{
            type:DataTypes.STRING
        }
    },
    {
        timestamp:false
    })
}