import { Router } from "express";
import { PatientRoutes } from "../modules/patients/patient.route";
import { AppointmentRoutes } from "../modules/appointments/appointment.route";

const router = Router();

router.use("/patients", PatientRoutes);
router.use("/appointments", AppointmentRoutes);

export default router;
