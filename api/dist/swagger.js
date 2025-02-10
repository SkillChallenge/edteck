"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specs = exports.swaggerRouter = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express_1 = require("express");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Edtech API",
            version: "1.0.0",
            description: "API for managing challenges",
        },
        servers: [
            {
                url: "http://localhost:5000/api/edteck",
                description: "Local server",
            },
        ],
        components: {
            schemas: {
                Challenge: {
                    type: "object",
                    required: ["title", "description", "difficulty"], // Add required fields
                    properties: {
                        id: {
                            type: "string",
                            description: "Auto-generated ID of the challenge",
                        },
                        title: {
                            type: "string",
                            description: "Title of the challenge",
                        },
                        description: {
                            type: "string",
                            description: "Description of the challenge",
                        },
                        difficulty: {
                            type: "string",
                            description: "Difficulty level of the challenge",
                            enum: ["easy", "medium", "hard"],
                        },
                    },
                },
            },
        },
    },
    apis: ["./src/routes/*.ts"], // Changed to source TypeScript files
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.specs = specs;
const swaggerRouter = (0, express_1.Router)();
exports.swaggerRouter = swaggerRouter;
swaggerRouter.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
