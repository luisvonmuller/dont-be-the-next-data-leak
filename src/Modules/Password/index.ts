import crypto from 'crypto';
import { GeneratedPasswordAndHash } from './type';
import { VerifyPassword } from './interface';

export async function generatePassword(password: string): Promise<GeneratedPasswordAndHash> {
  return new Promise((resolve, reject) => {
    /** Generates the Hash Password. */
    const salt: string = crypto.randomBytes(128).toString('base64');

    /** Creates a Salted Password (We will be using it as the Priv Key later) */
    crypto.scrypt(password, salt, 512, (err, derivedKey) => {
      if (err) reject(err);
      resolve({
        hash: derivedKey.toString('hex'),
        salt: salt /* Yeah its ok to save it to your database */
      })
    });
  })
}

export async function verifyPassword({password, hash, salt}: VerifyPassword): Promise<boolean> {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, 512, (err, derivedKey) => {
      if (err) reject(err);
      resolve(hash == derivedKey.toString('hex'))
    });
  })
}

export { GeneratedPasswordAndHash };