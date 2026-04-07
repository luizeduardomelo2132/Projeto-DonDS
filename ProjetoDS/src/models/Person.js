Person.js

const mongoose = require("mongoose");

const pessoaSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },

    idade: {
        type: Number,
        required: true
    },

    cidade: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Pessoa", pessoaSchema);