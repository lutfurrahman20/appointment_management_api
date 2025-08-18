import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { envVars } from "./app/config/env";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Appointment Management API",
      version: "1.0.0",
      description: "API for managing patients and appointments",
    },
    servers: [
      {
        url: `http://localhost:${envVars.PORT}`, 
      },
    ],
  },
  apis: ["./src/app/modules/**/*.ts"], 
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}
