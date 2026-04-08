const mongoose = require("mongoose")

const jogoSchema = mongoose.model('Jogo', {

    nome:{
        type:String,
        required:true
    },

    ano:{
        type:Number,
        required:true,
    },

    finalizado:{
        type:Boolean,
        required:true
    },

    pessoa:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Pessoa",
        required:true
    },

    isActive:{
        type:Boolean,
        default:true
    }

})

module.exports = jogoSchema
