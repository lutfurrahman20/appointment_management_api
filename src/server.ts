import { Server } from "http";
import app from "./app";
import { connectDB } from "./app/config/db";
import { envVars } from "./app/config/env";

let server: Server;

const startServer = async () => {
  try {
    await connectDB();

    server = app.listen(envVars.PORT, () => {
      console.log(`Server running at http://localhost:${envVars.PORT}`);
    });
  } catch (err) {
    console.error("Server start failed...", err);
    process.exit(1);
  }
};

(async () => {
  await startServer();
})();


process.on("SIGTERM", () => {
  console.log("SIGTERM signal received... Server shutting down..");
  if (server) {
    server.close(() => process.exit(1));
  }
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received... Server shutting down..");
  if (server) {
    server.close(() => process.exit(1));
  }
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection detected... Server shutting down..", err);
  if (server) {
    server.close(() => process.exit(1));
  }
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception detected... Server shutting down..", err);
  if (server) {
    server.close(() => process.exit(1));
  }
});
