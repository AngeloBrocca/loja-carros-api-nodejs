const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");

const sequelize = require("./config/database");
const carroRoutes = require("./routes/carroRoutes");
const swaggerSpec = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/carros", carroRoutes);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

sequelize.sync()
    .then(() => {

        console.log("Banco conectado!");

        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000");
        });
    })
    .catch((err) => {
        console.log(err);
    });