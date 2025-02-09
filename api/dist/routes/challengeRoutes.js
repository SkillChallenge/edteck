"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const challengeController_1 = require("../controllers/challengeController");
const challengeRouter = (0, express_1.Router)();
challengeRouter.post("/challenges", challengeController_1.ChallengeController.create);
challengeRouter.get("/challenges", challengeController_1.ChallengeController.getAll);
// router.get("/challenges/:id", ChallengeController.getById);
challengeRouter.put("/challenges/:id", challengeController_1.ChallengeController.update); // Use PUT for updates
// router.delete("/challenges/:id", ChallengeController.delete);
exports.default = challengeRouter;
