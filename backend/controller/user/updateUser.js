const userModel = require("../../models/userModel")

async function updateUser(req,res){
    try{
      console.log("userId",req.userId)
        const sessionUser = req._id
        const { _id , email, name, role} = req.body
        

        const payload = {
           email : email,
         name : name,
          role : role,
        }

        const user = await userModel.findById(sessionUser)

        console.log(req.userId,payload)
        const updateUser = await userModel.findByIdAndUpdate(req.userId,payload)
      console.log(updateUser)
       
        res.json({
            data : updateUser,
            message : "User Updated",
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}


module.exports = updateUser