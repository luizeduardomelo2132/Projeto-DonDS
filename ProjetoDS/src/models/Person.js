const mongoose = require("mongoose");

const pessoaSchema = mongoose.model('Person', {

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

module.exports = pessoaSchema;