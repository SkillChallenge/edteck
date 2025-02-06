import { Router } from "express";
import { ChallengeController } from "../controllers/challengeController";

const router = Router();

router.post("/challenges", ChallengeController.create);
router.get("/challenges", ChallengeController.getAll);
router.get("/challenges/:id", ChallengeController.getById);
router.put("/challenges/:id", ChallengeController.update);  // Use PUT for updates
router.delete("/challenges/:id", ChallengeController.delete);

export default router;
