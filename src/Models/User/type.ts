import { Document } from 'mongoose';

type User = {
  email: string;
  password: string;
  salt: string;
  privateStuff: [
    {
      sensitiveField: string;
      anotherSensitiveField: string;
    }
  ]
} & Document;

export default User;