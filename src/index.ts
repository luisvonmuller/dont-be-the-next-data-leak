import crypto from 'crypto';
import { generatePassword, verifyPassword, GeneratedPasswordAndHash } from './Modules/Password';
// 🔑 Key Relation Storage... 🤔
import { KeysStorage, fieldKeyRelation } from './Models/KeyStorage/type';

// End-User  😳
import EndUser from './Models/User/type'

// AdminUser 🤩
import AdminUserLike from './Models/AdminUser/type';

//Cyphering stuff
import { cypherField } from './Modules/Cypher/index';



const generateEndUser = async (): Promise<EndUser> => {
  let generateSaltedPassword: GeneratedPasswordAndHash = await generatePassword('enduser');
  return {
    email: 'batatinha@gmail.com',
    password: generateSaltedPassword.hash,
    salt: generateSaltedPassword.salt,
    privateStuff:
    {
      sensitiveField: 'Histórico do navegador do Luís 👀', // Esse campo deve ser $Ifrado (Endereço)
      anotherSensitiveField: 'Falar que rust lang não presta 🦀', // Esse campo deve ser $Ifrado (CPF)
    }

  }
}

/** ### Gera um User Administrativo Estático 
 *  * Recebe nada. Retorna AdminUser;
 * 
 *  Todo: Randomize it. (Para depois fazer benchmarcks)
*/
const generateAdminUser = async (): Promise<AdminUserLike> => {
  const generateSaltedPassword: GeneratedPasswordAndHash = await generatePassword('123456789');
  return {
    email: 'batatao@gmail.com',
    password: generateSaltedPassword.hash, /* One way encryption -> Salted Hash 🧂. */
    salt: generateSaltedPassword.salt,
  }
}

const mapSensitiveFields = (endUser: EndUser): string[] => {
  return Object.getOwnPropertyNames({ ...endUser.privateStuff }).map((field) => {
    return field;
  })
}


// @return -> fieldKeyRelation
const generateFieldKeyRelation = (sensitiveField: string[], endUser: EndUser): fieldKeyRelation[] => {
  return sensitiveField.map((propertyPath) => {
    let targetValue = { ...endUser.privateStuff }[propertyPath];
    let accessKey: Buffer = crypto.randomBytes(16);
    return {
      targetField: propertyPath,
      personalKey: cypherField<typeof targetValue>({ pseudoPublicKey: accessKey, ownSecret: endUser.password, value: targetValue }), // 🔑 A key Pessoal (Self use to read/edit)
    }
  })
}





// To check password.   console.log(await verifyPassword({ password: '123456789', ...genPasswordHashObj }));



(async () => {
  try {
    /** User estático para validar o conceito */
    const endUser: EndUser = await generateEndUser();
    console.log(Buffer.from(endUser.password).length);
    /** Admin estático para validar o conceito */
    const adminUser: AdminUserLike = await generateAdminUser();

    const endUserSensitiveFields: string[] = mapSensitiveFields(endUser);
    console.log(endUserSensitiveFields);

    const keysRelation: fieldKeyRelation[] = generateFieldKeyRelation(endUserSensitiveFields, endUser);
    console.log(keysRelation);




  } catch (err) {
    console.log(err);
  }

  /**
   * todo: Try/Catch
   * !STEP 1: Saving a new user.
   * * Cyphers with the private key the private fields;
   * * Generate a public key to read that fields
   * * Populate the KeyStorage relation mappings for every ADM user with a new assymetric key by the ADMUser 
   */

  /**
   * !STEP 2.
   * Todo: (try/catch)  
   * * Uncypher the public key to read the fields with private key (Salted Password from the ADMuser);  
  */


})();
