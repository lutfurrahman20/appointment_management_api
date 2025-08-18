import { Router } from "express";
import { AppointmentController } from "./appointment.controller";

const router = Router();

router.post("/", AppointmentController.create);     // Create
router.get("/", AppointmentController.getAll);      // Get All
router.put("/:id", AppointmentController.update);   // Update
router.delete("/:id", AppointmentController.delete); // Delete

export const AppointmentRoutes = router;
