const mongoose=require("mongoose")

const ObjectId = mongoose.Schema.Types.ObjectId


const restourant = new mongoose.Schema({

    title:{type:String,required:true},

    adddress:{type:String,require:true},

    rating:{type:Number},

    pic:{type:String}

},{timestamps: true})

module.exports= mongoose.model('Shop', restourant)