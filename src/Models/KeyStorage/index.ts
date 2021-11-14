import { model, Schema, Model } from 'mongoose';
import User from './type';

/** Creates the Client-user on The mongoDB */
const User: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  privateStuff: [
    {
      sensitiveField: { type: String, required: true},
      anotherSensitiveField: { type: String, required: true },
    }
  ]
}); 

export default model('User', User);