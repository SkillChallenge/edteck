import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Router } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Edtech API",
      version: "1.0.0",
      description: "API for managing challenges",
    },
    servers: [
      {
        url: "http://localhost:5000", 
        description: "Local server",
      },
    ],
    components: {
      schemas: {
        Challenge: {
          type: "object",
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
  apis: ["./src/routes/*.ts"], // Path to your route files
};

const specs = swaggerJsdoc(options);


export const swaggerRouter = Router();
swaggerRouter.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));