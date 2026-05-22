const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Carro = sequelize.define("Carro", {
    placa: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },

    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },

    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1900
        }
    },

    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            min: 0
        }
    },

    cor: {
        type: DataTypes.STRING
    },

    quilometragem: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    }
}, {
    tableName: "carros"
});

module.exports = Carro;