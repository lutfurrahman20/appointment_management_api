import { PrismaClient } from "@prisma/client";
import { IAppointment } from "./appointment.interface";

const prisma = new PrismaClient();

export const AppointmentService = {
  // CREATE
  createAppointment: async (data: IAppointment) => {
    const patient = await prisma.patient.findUnique({
      where: { id: data.PatientId },
    });
    if (!patient) throw new Error("Patient not found");

    const appointment = await prisma.appointment.create({
      data: {
        patientId: data.PatientId,
        appointmentDate: new Date(data.AppointmentDate),
        appointmentTime: data.AppointmentTime,
        reason: data.Reason,
      },
    });

    return appointment;
  },

  // READ (all)
  getAppointments: async () => {
    return prisma.appointment.findMany({ include: { patient: true } });
  },

  // UPDATE
  updateAppointment: async (id: number, data: Partial<IAppointment>) => {
    return prisma.appointment.update({
      where: { id },
      data: {
        appointmentDate: data.AppointmentDate
          ? new Date(data.AppointmentDate)
          : undefined,
        appointmentTime: data.AppointmentTime,
        reason: data.Reason,
      },
    });
  },

  // DELETE
  deleteAppointment: async (id: number) => {
    return prisma.appointment.delete({ where: { id } });
  },
};
