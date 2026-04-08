const Pessoa = require("../models/pessoas")

class PessoasController{

    static async create(req,res){

        try{

            const pessoa = await Pessoa.create(req.body)

            res.status(201).json(pessoa)

        }catch(error){

            res.status(500).json(error)

        }

    }

    static async getAll(req,res){

        try{

            const pessoas = await Pessoa.find()

            res.status(200).json(pessoas)

        }catch(error){

            res.status(500).json(error)

        }

    }

}

module.exports = PessoasController
