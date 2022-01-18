export type MessageType = "email" | "sms" | "phone";

export interface Contact {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
}

export interface Message {
  body: string;
  contact: Contact;
  date: Date;
  id: number;
  read: boolean;
  subject: string;
  type: MessageType;
}
