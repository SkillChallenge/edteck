import { Router } from "express";
import { ChallengeController } from "../controllers/challengeController";

const challengeRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Challenges
 *   description: API for managing challenges
 */

/**
 * @swagger
 * /api/edtech/challenges:
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
 *                 example: "AI Innovation Challenge"
 *               duration:
 *                 type: string
 *                 example: "3 months"
 *               prize:
 *                 type: string
 *                 example: "$5000"
 *               contactEmail:
 *                 type: string
 *                 example: "contact@example.com"
 *               projectDescription:
 *                 type: string
 *                 example: "Build an AI model for medical diagnosis."
 *               projectBrief:
 *                 type: string
 *                 example: "A short summary of the challenge."
 *               projectDescriptionAndTasks:
 *                 type: string
 *                 example: "Details about the challenge tasks."
 *     responses:
 *       201:
 *         description: Challenge created successfully
 *       400:
 *         description: Invalid request
 */
challengeRouter.post("/", ChallengeController.create);

/**
 * @swagger
 * /api/edtech/challenges:
 *   get:
 *     summary: Get all challenges
 *     tags: [Challenges]
 *     responses:
 *       200:
 *         description: List of challenges
 *       500:
 *         description: Server error
 */
challengeRouter.get("/", ChallengeController.getAll);

/**
 * @swagger
 * /api/edtech/challenges/{id}:
 *   get:
 *     summary: Get a challenge by ID
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the challenge
 *     responses:
 *       200:
 *         description: Challenge details
 *       404:
 *         description: Challenge not found
 */
challengeRouter.get("/:id", ChallengeController.getById);

/**
 * @swagger
 * /api/edtech/challenges/{id}:
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
 *               duration:
 *                 type: string
 *                 example: "6 months"
 *               prize:
 *                 type: string
 *                 example: "$10,000"
 *               contactEmail:
 *                 type: string
 *                 example: "updated@example.com"
 *               projectDescription:
 *                 type: string
 *                 example: "Updated description of the challenge."
 *               projectBrief:
 *                 type: string
 *                 example: "Updated short summary."
 *               projectDescriptionAndTasks:
 *                 type: string
 *                 example: "Updated details about the challenge tasks."
 *     responses:
 *       200:
 *         description: Challenge updated successfully
 *       404:
 *         description: Challenge not found
 */
challengeRouter.put("/:id", ChallengeController.update);

/**
 * @swagger
 * /api/edtech/challenges/{id}:
 *   delete:
 *     summary: Delete a challenge
 *     tags: [Challenges]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the challenge to delete
 *     responses:
 *       200:
 *         description: Challenge deleted successfully
 *       404:
 *         description: Challenge not found
 */
challengeRouter.delete("/:id", ChallengeController.delete);

export default challengeRouter;
