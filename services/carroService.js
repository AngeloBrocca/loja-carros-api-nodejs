const Carro = require("../models/carro");

class CarroService {

    async listarTodos() {
        return await Carro.findAll();
    }

    async buscarPorId(placa) {
        return await Carro.findByPk(placa);
    }

    async salvar(carro) {
        return await Carro.create(carro);
    }

    async atualizar(placa, dados) {

        const carro = await Carro.findByPk(placa);

        if (!carro) {
            throw new Error("Carro não encontrado");
        }

        await carro.update(dados);

        return carro;
    }

    async deletar(placa) {

        const carro = await Carro.findByPk(placa);

        if (!carro) {
            throw new Error("Carro não encontrado");
        }

        await carro.destroy();
    }
}

module.exports = new CarroService();