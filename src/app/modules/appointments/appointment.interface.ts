export interface IAppointment {
  PatientId: number;
  AppointmentDate: string; // YYYY-MM-DD
  AppointmentTime: string; // HH:MM
  Reason: string;
}
