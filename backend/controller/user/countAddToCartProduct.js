const addToCartModel = require("../../models/cartProduct")

const countAddToCartProduct = async(req,res)=>{
    try{
        const userId = req.userId
// console.log(userId)
        const count = await addToCartModel.countDocuments({
             userId
        })
// console.log(count)
        res.json({
            data : {
                count : count
            },
            message : "ok",
            error : false,
            success : true
        })
    }catch(error){
        res.json({
            message : error.message || error,
            error : false,
            success : false,
        })
    }
}

module.exports = countAddToCartProduct