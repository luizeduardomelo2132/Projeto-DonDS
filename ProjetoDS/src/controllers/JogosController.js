const Jogo = require("./models/jogos")

class JogosController{

    static async create(req,res){

        try{

            const jogo = await Jogo.create(req.body)

            res.status(201).json(jogo)

        }catch(error){

            res.status(500).json(error)

        }

    }

    static async getAll(req,res){

        try{

            const filtro = {isActive:true}

            if(req.query.ano){
                filtro.ano = req.query.ano
            }

            if(req.query.finalizado){
                filtro.finalizado = req.query.finalizado
            }

            const jogos = await Jogo.find(filtro)

            res.status(200).json(jogos)

        }catch(error){

            res.status(500).json(error)

        }

    }

    static async getById(req,res){

        try{

            const jogo = await Jogo.findById(req.params.id)

            if(!jogo){
                return res.status(404).json({msg:"Jogo não encontrado"})
            }

            res.status(200).json(jogo)

        }catch(error){

            res.status(500).json(error)

        }

    }

    static async update(req,res){

        try{

            const jogo = await Jogo.findByIdAndUpdate(req.params.id, req.body,{new:true})

            res.status(200).json(jogo)

        }catch(error){

            res.status(500).json(error)

        }

    }

    static async delete(req,res){

        try{

            await Jogo.findByIdAndUpdate(req.params.id,{isActive:false})

            res.status(200).json({msg:"Jogo removido"})

        }catch(error){

            res.status(500).json(error)

        }

    }

}

module.exports = JogosController

