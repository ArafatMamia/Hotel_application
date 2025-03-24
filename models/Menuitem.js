const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
    ,
    test:{
        type:String,
        enum:['sweet', 'spicy', 'sour'],
        required:true
    }
    ,
    is_drint:{
        type:Boolean,
        default:false
    }
    ,
    ingredients:{
        type:[String],
        required:[]
    }
    ,
    num_sales:{
        type:Number,
        default:0
    }
    
})
const MenuItem = mongoose.model('MenuItem', menuSchema)
module.exports = MenuItem