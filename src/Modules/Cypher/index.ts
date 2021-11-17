import { CypherField } from './interface';
import crypto from './crypto';

function cypherField<T>({ pseudoPublicKey, ownSecret, value }: CypherField<T>): void {
  let temporaryCypher:  = crypto.createCipheriv('aes-256-cbc', ownSecret, pseudoPublicKey);
}

export { cypherField };