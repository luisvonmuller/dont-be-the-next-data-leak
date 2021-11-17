import { Document } from 'mongoose';

type User = {
  email: string;
  password: string;
  salt: string;
  privateStuff: [
    {
      sensitiveField: string; // Esse campo deve ser $Ifrado (Endereço)
      anotherSensitiveField: string; // Esse campo deve ser $Ifrado (CPF)
    }
  ]
};

export default User;