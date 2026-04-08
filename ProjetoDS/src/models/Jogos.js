src/models/jogos.js

const mongoose = require("mongoose")

const jogoSchema = new mongoose.Schema({

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

module.exports = mongoose.model("Jogo", jogoSchema)
