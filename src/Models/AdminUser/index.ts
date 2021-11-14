import { model, Schema, Model } from 'mongoose';
import AdmUser from './interface';

/** Creates the model on MongoDb */
const AdmUser: Schema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
});

const User: Model<AdmUser> = model('User', AdmUser);