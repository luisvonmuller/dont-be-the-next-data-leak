import { CypherField } from './interface';
import crypto from 'crypto';

function cypherField<T>({ pseudoPublicKey, ownSecret, value }: CypherField<T>): string {
  let key = ownSecret.substring(0, 32)
  const encrypter: any = crypto.createCipheriv('aes-256-ctr', Buffer.from(key), pseudoPublicKey);
  return encrypter.update(value, "utf-8", "hex");
}

export { cypherField };