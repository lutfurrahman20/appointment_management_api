import { Request, Response } from "express";
import { AppointmentService } from "./appointment.service";



export const AppointmentController = {
  create: async (req: Request, res: Response) => {
    try {
      const appointment = await AppointmentService.createAppointment(req.body);
      res.status(201).json({
        AppointmentId: appointment.id,
        PatientId: appointment.patientId,
        AppointmentDate: appointment.appointmentDate
          .toISOString()
          .split("T")[0],
        AppointmentTime: appointment.appointmentTime,
        Reason: appointment.reason,
        Message: "Appointment created successfully",
      });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  getAll: async (_req: Request, res: Response) => {
    const appointments = await AppointmentService.getAppointments();
    res.json(appointments);
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updated = await AppointmentService.updateAppointment(
        Number(id),
        req.body
      );
      res.json({ message: "Appointment updated successfully", updated });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await AppointmentService.deleteAppointment(Number(id));
      res.json({ message: "Appointment deleted successfully" });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },
};
