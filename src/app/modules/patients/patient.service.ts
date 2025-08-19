import { PrismaClient } from "@prisma/client";
import { IPatient } from "./patient.interface";

const prisma = new PrismaClient();

export const PatientService = {
  // Create
  createPatient: async (data: IPatient) => {
    return prisma.patient.create({ data });
  },

  // Read all
  getPatients: async () => {
    return prisma.patient.findMany({
      include: { appointments: true },
    });
  },

  // Read one
  getPatientById: async (id: number) => {
    return prisma.patient.findUnique({
      where: { id },
      include: { appointments: true },
    });
  },

  // Update
  updatePatient: async (id: number, data: Partial<IPatient>) => {
    return prisma.patient.update({
      where: { id },
      data,
    });
  },

  // Delete
  deletePatient: async (id: number) => {
    return prisma.patient.delete({ where: { id } });
  },
};
