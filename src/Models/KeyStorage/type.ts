import { Document, ObjectId } from 'mongoose';

type KeysStorage = {
  adminUser: ObjectId;
  targetUser: ObjectId;
  fieldKeyRelation: fieldKeyRelation[]
} & Document;

type fieldKeyRelation = {
  targetField: [path: string];
  acessKey: string;
}

export default KeysStorage;