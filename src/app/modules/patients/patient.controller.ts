import { Request, Response } from "express";
import { PatientService } from "./patient.service";

export const PatientController = {
  create: async (req: Request, res: Response) => {
    try {
      const patient = await PatientService.createPatient(req.body);
      res.status(201).json({
        message: "Patient created successfully",
        patient,
      });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  getAll: async (_req: Request, res: Response) => {
    const patients = await PatientService.getPatients();
    res.json(patients);
  },

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const patient = await PatientService.getPatientById(Number(id));
      if (!patient) return res.status(404).json({ message: "Patient not found" });
      res.json(patient);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updated = await PatientService.updatePatient(Number(id), req.body);
      res.json({ message: "Patient updated successfully", updated });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await PatientService.deletePatient(Number(id));
      res.json({ message: "Patient deleted successfully" });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },
};
