export type DocumentType = "DNI" | "CE" | "PASAPORTE";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface OnboardingPayload {
  firstName: string;
  lastName: string;
  documentType: DocumentType;
  documentNumber: string;
  phone: string;
  birthDate: string;
  email: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}
