import { Document } from 'mongoose';

/** Defines the Admin User Structure */
type AdmUser = {
  email: string;
  password: string; /* One way encryption -> Salted Hash 🧂. */
  salt: string;
  firstName: string;
  lastName: string;
};

export default AdmUser;