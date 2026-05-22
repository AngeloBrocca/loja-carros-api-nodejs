const express = require("express");
const router = express.Router();

const carroController = require("../controllers/carroController");

/**
 * @swagger
 * /carros:
 *   get:
 *     summary: Lista todos os carros
 *     tags: [Carros]
 *     responses:
 *       200:
 *         description: Lista de carros
 */
router.get("/", carroController.listarTodos);

/**
 * @swagger
 * /carros/{placa}:
 *   get:
 *     summary: Busca carro pela placa
 *     tags: [Carros]
 *     parameters:
 *       - in: path
 *         name: placa
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Carro encontrado
 *       404:
 *         description: Carro não encontrado
 */
router.get("/:placa", carroController.buscarPorId);

/**
 * @swagger
 * /carros:
 *   post:
 *     summary: Cria um carro
 *     tags: [Carros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               placa:
 *                 type: string
 *               marca:
 *                 type: string
 *               modelo:
 *                 type: string
 *               ano:
 *                 type: integer
 *               preco:
 *                 type: number
 *               cor:
 *                 type: string
 *               quilometragem:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Carro criado
 */
router.post("/", carroController.salvar);

/**
 * @swagger
 * /carros/{placa}:
 *   put:
 *     summary: Atualiza um carro
 *     tags: [Carros]
 */
router.put("/:placa", carroController.atualizar);

/**
 * @swagger
 * /carros/{placa}:
 *   delete:
 *     summary: Remove um carro
 *     tags: [Carros]
 */
router.delete("/:placa", carroController.deletar);

module.exports = router;