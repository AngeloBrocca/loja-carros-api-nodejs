const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Loja de Carros",
            version: "1.0.0",
            description: "API CRUD de carros"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },

    // CORREÇÃO AQUI
    apis: ["./routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;