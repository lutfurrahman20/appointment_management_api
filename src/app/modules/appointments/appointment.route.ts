import { Router } from "express";
import { AppointmentController } from "./appointment.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Appointments
 *   description: Appointment management endpoints
 */

/**
 * @swagger
 * /appointments:
 *   post:
 *     summary: Create a new appointment
 *     tags: [Appointments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: integer
 *                 example: 1
 *               appointmentDate:
 *                 type: string
 *                 format: date
 *                 example: "2025-08-20"
 *               appointmentTime:
 *                 type: string
 *                 example: "14:30"
 *               reason:
 *                 type: string
 *                 example: "Routine checkup"
 *     responses:
 *       200:
 *         description: Appointment created successfully
 */
router.post("/", AppointmentController.create);

/**
 * @swagger
 * /appointments:
 *   get:
 *     summary: Get all appointments
 *     tags: [Appointments]
 *     responses:
 *       200:
 *         description: List of appointments
 */
router.get("/", AppointmentController.getAll);

/**
 * @swagger
 * /appointments/{id}:
 *   put:
 *     summary: Update an appointment by ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patientId:
 *                 type: integer
 *                 example: 1
 *               appointmentDate:
 *                 type: string
 *                 format: date
 *                 example: "2025-08-20"
 *               appointmentTime:
 *                 type: string
 *                 example: "15:00"
 *               reason:
 *                 type: string
 *                 example: "Follow-up"
 *     responses:
 *       200:
 *         description: Appointment updated successfully
 */
router.put("/:id", AppointmentController.update);

/**
 * @swagger
 * /appointments/{id}:
 *   delete:
 *     summary: Delete an appointment by ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Appointment deleted successfully
 */
router.delete("/:id", AppointmentController.delete);

export const AppointmentRoutes = router;

