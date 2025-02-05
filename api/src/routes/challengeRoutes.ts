import express from "express";
import { ChallengeController } from "../controllers/challengeController";

const router = express.Router();

router.post("/challenges", ChallengeController.create);
router.get("/challenges", ChallengeController.getAll);
router.get("/challenges/:id", ChallengeController.getById);
router.put("/challenges/:id", ChallengeController.update);
router.delete("/challenges/:id", ChallengeController.delete);

export default router;
