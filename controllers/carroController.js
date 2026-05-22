const carroService = require("../services/carroService");

class CarroController {

    async listarTodos(req, res) {

        const carros = await carroService.listarTodos();

        res.json(carros);
    }

    async buscarPorId(req, res) {

        const { placa } = req.params;

        const carro = await carroService.buscarPorId(placa);

        if (!carro) {
            return res.status(404).json({
                mensagem: "Carro não encontrado"
            });
        }

        res.json(carro);
    }

    async salvar(req, res) {

        try {

            const novoCarro = await carroService.salvar(req.body);

            res.status(201).json(novoCarro);

        } catch (error) {

            res.status(400).json({
                erro: error.message
            });
        }
    }

    async atualizar(req, res) {

        try {

            const carroAtualizado = await carroService.atualizar(
                req.params.placa,
                req.body
            );

            res.json(carroAtualizado);

        } catch (error) {

            res.status(404).json({
                erro: error.message
            });
        }
    }

    async deletar(req, res) {

        try {

            await carroService.deletar(req.params.placa);

            res.status(204).send();

        } catch (error) {

            res.status(404).json({
                erro: error.message
            });
        }
    }
}

module.exports = new CarroController();