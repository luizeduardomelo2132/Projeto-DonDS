const mongoose = require("mongoose");

const pessoaSchema = mongoose.model('Pessoa', {

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