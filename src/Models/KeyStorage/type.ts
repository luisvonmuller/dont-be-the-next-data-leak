import { Document, ObjectId } from 'mongoose';

type KeysStorage = {
  targetUser: ObjectId;
  fieldKeyRelation: fieldKeyRelation[]
} & Document;

type fieldKeyRelation = {
  targetField: string; // É o field que a gente quer desincriptar.
  keys?: {
    // Roles... (ANOTHER USER to be able to read.)
    [role: string]: {
      user: ObjectId, // usuário "com autorização"
      key: string // 🔑 Chave (assimétrica) para esse usuário 
    },
  }
  personalKey: string, // 🔑 A key Pessoal (Self use to read/edit)
}

export { KeysStorage, fieldKeyRelation };