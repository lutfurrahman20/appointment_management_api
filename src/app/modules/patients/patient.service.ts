import { PrismaClient } from "@prisma/client";
import { IPatient } from "./patient.interface";

const prisma = new PrismaClient();

export const PatientService = {
  // CREATE
  createPatient: async (data: IPatient) => {
    return prisma.patient.create({ data });
  },

  // READ all
  getPatients: async () => {
    return prisma.patient.findMany({
      include: { appointments: true }, 
    });
  },

  // READ one
  getPatientById: async (id: number) => {
    return prisma.patient.findUnique({
      where: { id },
      include: { appointments: true },
    });
  },

  // UPDATE
  updatePatient: async (id: number, data: Partial<IPatient>) => {
    return prisma.patient.update({
      where: { id },
      data,
    });
  },

  // DELETE
  deletePatient: async (id: number) => {
    return prisma.patient.delete({ where: { id } });
  },
};
