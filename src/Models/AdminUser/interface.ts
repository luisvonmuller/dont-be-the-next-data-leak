import { Document} from 'mongoose';

/* Defines the Admin User Structure */
interface AdmUser extends Document {
  email: string; 
  password: string; /* One way encryption -> Salted Hash 🧂. */
  salt: string;
  firstName: string;
  lastName: string;
}

export default AdmUser;