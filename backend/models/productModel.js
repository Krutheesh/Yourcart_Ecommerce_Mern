const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName :{
        type:String,
        required:[true,"Please provide a product name"],
        trim:true,
        maxLength:[120, "Product name should not be more than 120 char"]
    } ,
    brandName :{
        type:String,
        required:[true,"Please provide brand name"],
        trim:true,
        maxLength:[120, "Brand name should not be more than 120 char"]
    },
    category : {
        type:String,
        required:[true,"Please provide brand name"],
        trim:true,
        maxLength:[120, "Brand name should not be more than 120 char"]
    },
    productImage : [],
    description :{
        type:String
    } ,
    price :{
        type:Number,
        required:[true,"Please provide a product price"],
        maxLength:[5,"Product price should not be more than 5 digits"]
    } ,
    sellingPrice : Number
},{
    timestamps : true
})


const productModel = mongoose.model("product",productSchema)

module.exports = productModel