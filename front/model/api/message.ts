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
  id: string;
  read: boolean;
  subject: string;
  type: string;
}
