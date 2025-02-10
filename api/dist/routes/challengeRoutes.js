"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challengeController_1 = require("../controllers/challengeController");
const challengeRouter = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Challenges
 *   description: API for managing coding challenges
 */
/**
 * @swagger
 * /api/edteck/challenges/create:
 *   post:
 *     summary: Create a new challenge
 *     tags: [Challenges]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "New Challenge"
 *               description:
 *                 type: string
 *                 example: "Solve this problem"
 *     responses:
 *       201:
 *         description: Challenge created successfully
 *       400:
 *         description: Invalid request
 */
challengeRouter.post("/create", challengeController_1.ChallengeController.create);
/**
 * @swagger
 * /api/edteck/challenges:
 *   get:
 *     summary: Get all challenges
 *     tags: [Challenges]
 *     responses:
 *       200:
 *         description: List of challenges
 *       500:
 *         description: Server error
 */
challengeRouter.get("/challenges", challengeController_1.ChallengeController.getAll);
/**
 * @swagger
 * /api/edteck/challenges/{id}:
 *   put:
 *     summary: Update a challenge
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the challenge to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Challenge"
 *               description:
 *                 type: string
 *                 example: "Updated description"
 *     responses:
 *       200:
 *         description: Challenge updated successfully
 *       404:
 *         description: Challenge not found
 */
challengeRouter.put("/challenges/:id", challengeController_1.ChallengeController.update);
exports.default = challengeRouter;
