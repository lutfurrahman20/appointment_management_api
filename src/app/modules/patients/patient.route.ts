import { Router } from "express";
import { PatientController } from "./patient.controller";

const router = Router();

router.post("/", PatientController.create);      // Create
router.get("/", PatientController.getAll);       // Get All
router.get("/:id", PatientController.getById);   // Get One
router.put("/:id", PatientController.update);    // Update
router.delete("/:id", PatientController.delete); // Delete

export const PatientRoutes = router;
