import { model, Schema, Model } from 'mongoose';
import AdmUser from './type';

/** Creates the model on MongoDb */
const AdmUser: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

export default model('AdmUser', AdmUser);