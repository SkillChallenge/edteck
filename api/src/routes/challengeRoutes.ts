import { Router } from "express";
import { ChallengeController } from "../controllers/challengeController";

const challengeRouter = Router();

challengeRouter.post("/challenges", ChallengeController.create);
challengeRouter.get("/challenges", ChallengeController.getAll);
// router.get("/challenges/:id", ChallengeController.getById);
challengeRouter.put("/challenges/:id", ChallengeController.update);  // Use PUT for updates
// router.delete("/challenges/:id", ChallengeController.delete);

export default challengeRouter;
